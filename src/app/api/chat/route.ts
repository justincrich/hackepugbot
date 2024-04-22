import { NextRequest, NextResponse } from "next/server";
import { createAgent } from "@/ai/agents";
import { MessageType } from "../../../types";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const messages: MessageType[] = body?.messages ?? [];
  const agent = await createAgent();
  const lastMessage = messages[messages.length - 1];
  if (!lastMessage || !lastMessage.isUser)
    return new NextResponse("NO_NEW_USER_MESSAGE", {
      status: 400,
    });

  const chatHistory = messages.slice(0, messages.length - 1);
  try {
    const eventStream = await agent.streamEvents(
      {
        input: lastMessage.text,
        chat_history: chatHistory.reduce((acc, cur) => {
          if (cur.isUser) {
            return acc + `Human: ${cur.text}\n`;
          } else {
            return acc + `AI: ${cur.text}\n`;
          }
        }, ""),
      },
      {
        version: "v1",
      }
    );
    const encoder = new TextEncoder();
    return new NextResponse(
      new ReadableStream<Uint8Array>({
        async start(controller) {
          let output = "";
          for await (let event of eventStream) {
            const eventType = event.event;

            if (eventType === "on_tool_start") {
              console.log("\n-----");
              console.log(
                `Starting tool: ${event.name} with inputs: ${event.data.input}`
              );
            }
            if (eventType === "on_tool_end") {
              console.log("\n-----");
              console.log(`Finished tool: ${event.name}\n`);
              console.log(`Tool output was: ${event.data.output}`);
              console.log("\n-----");
            }
            if (eventType === "on_llm_stream") {
              const content = event.data?.chunk?.content;
              if (content) {
                output += content;
              }
              const regex = /(?<=<final_answer>\s*).*$/s;
              const result = output.match(regex);
              if (result && result[0].replace(/^\n+/, "")) {
                console.log("has an output", result);
                const data = encoder.encode(result[0].replace(/^\n+/, ""));
                controller.enqueue(data);
              }
            }
          }
          controller.close();
        },
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      }
    );
  } catch (e) {
    return new NextResponse(
      "Ooops ... something went wrong. I am a computer pug afterall 🐶. Give your question another try!",
      {
        status: 500,
      }
    );
  }
}
