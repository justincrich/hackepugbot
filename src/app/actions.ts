"use server";

import { createAgent } from "@/ai/agents";
import { MessageType } from "@/types";

export const sendMessage = async (
  nextMessage: string,
  history: MessageType[]
): Promise<string> => {
  console.log("server", typeof window === "undefined");
  const agent = await createAgent();
  try {
    const response = await agent.invoke({
      input: nextMessage,
      chat_history: history.reduce((acc, cur) => {
        if (cur.isUser) {
          return acc + `Human: ${cur.text}\n`;
        } else {
          return acc + `AI: ${cur.text}\n`;
        }
      }, ""),
    });
    return response.output;
  } catch (e) {
    return "Ooops ... something went wrong. I am a computer pug afterall 🐶. Give your question another try!";
  }
};
