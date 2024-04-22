import { AgentExecutor, createXmlAgent } from "langchain/agents";
import { DynamicTool, Tool } from "@langchain/core/tools";
import type { ChatPromptTemplate } from "@langchain/core/prompts";
import { pull } from "langchain/hub";
import { claude3Model, claudeInstantModel } from "./models";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import path from "path";
import { LANGCHAIN_HUB_API_KEY } from "@/env";
import { serverPath } from "@/serverPath";
import { WebPDFLoader } from "langchain/document_loaders/web/pdf";
import { pdfTextFromUrl } from "@/pdf";

const CareerHistoryTool = new DynamicTool({
  name: "CareerHistoryTool",
  description:
    "Returns information on the career history of Justin Rich. Justin's career history discusses both his education, work experience, and a limited list of school info. Will return both Justin's current resume under section header `RESUME` as well as a text from his LinkedIn profile under section header `LINKEDIN_PROFILE`.",
  func: async () => {
    const resumeText = await pdfTextFromUrl(
      "https://raw.githubusercontent.com/justincrich/hackepugbot/d9aa6ecf5aa7a146b42a2947063f08379628b882/public/Justin_Rich_Resume.pdf"
    );
    const linkedinText = await pdfTextFromUrl(
      "https://raw.githubusercontent.com/justincrich/hackepugbot/d9aa6ecf5aa7a146b42a2947063f08379628b882/public/linkedin_profile.pdf"
    );

    return `RESUME:\n${resumeText}\n\nLINKEDIN_PROFILE:\n${linkedinText}`;
  },
});

const tools: Tool[] = [CareerHistoryTool];

export const createAgent = async (): Promise<AgentExecutor> => {
  const prompt = await pull<ChatPromptTemplate>(
    "formulistai/hackerpug-chat-bot",
    {
      apiKey: LANGCHAIN_HUB_API_KEY,
    }
  );
  const agent = await createXmlAgent({
    llm: claude3Model,
    tools,
    prompt,
  });

  const agentExecutor = new AgentExecutor({
    agent,
    tools,
  });
  agentExecutor.withConfig({
    runName: "Agent",
  });
  return agentExecutor;
};
