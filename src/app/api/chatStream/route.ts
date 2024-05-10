import { NextRequest, NextResponse } from "next/server";
import { createAgent } from "@/ai/agents";
import { MessageType } from "../../../types";
import { aiOperations } from "@/ai/operations";

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const messages: MessageType[] = body?.messages ?? [];

  const lastMessage = messages[messages.length - 1];
  if (!lastMessage || !lastMessage.isUser)
    return new NextResponse("NO_NEW_USER_MESSAGE", {
      status: 400,
    });

  const chatHistory = messages.slice(0, messages.length - 1);
  try {
    const encoder = new TextEncoder();
    return new NextResponse(
      new ReadableStream<Uint8Array>({
        async start(controller) {
          await aiOperations.streamCareerHistory({
            text: lastMessage.text,
            history: chatHistory.reduce((acc, cur) => {
              if (cur.isUser) {
                return acc + `Human: ${cur.text}\n`;
              } else {
                return acc + `AI: ${cur.text}\n`;
              }
            }, ""),
            onUpdate: (text) => {
              controller.enqueue(encoder.encode(text));
            },
          });

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
