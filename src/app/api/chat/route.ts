import { NextRequest, NextResponse } from "next/server";
import { createAgent } from "@/ai/agents";
import { MessageType } from "../../../types";

export const maxDuration = 60;

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
    const response = await agent.invoke({
      input: lastMessage.text,
      chat_history: chatHistory.reduce((acc, cur) => {
        if (cur.isUser) {
          return acc + `Human: ${cur.text}\n`;
        } else {
          return acc + `AI: ${cur.text}\n`;
        }
      }, ""),
    });
    const responseText = response.output.trim();
    return new NextResponse(responseText, {
      status: 200,
    });
  } catch (e) {
    return new NextResponse(
      "Ooops ... something went wrong. I am a computer pug afterall 🐶. Give your question another try!",
      {
        status: 500,
      }
    );
  }
}
