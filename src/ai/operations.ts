import { pdfTextFromUrl } from "@/pdf";
import { LANGCHAIN_HUB_API_KEY } from "@/env";
import { claude2Model, claude3SonnetModelStreamable } from "./models";
import { PromptTemplate } from "langchain/prompts";

const careerTemplate = `You are a helpful assistant who knows everything about Justin Rich. Help the user answer any questions about Justin Rich. Using the provided CONTENT and CHAT_HISTORY  please respond to the following user input:

{input}

Respond to the input as if you have memorized the content and you are responding from your memory. Do not cite where you are getting this information. The user assumes you just know this info.

CONTENT:

{content}

CHAT_HISTORY:

{chat_history}`;

export const aiOperations = {
  async streamCareerHistory(args: {
    text: string;
    history: string;
    onUpdate: (text: string) => void;
    onError?: (error: Error) => void;
  }): Promise<string> {
    const { text, history, onUpdate } = args;
    let message = "";
    try {
      const resumeText = await pdfTextFromUrl(
        "https://raw.githubusercontent.com/justincrich/hackepugbot/d9aa6ecf5aa7a146b42a2947063f08379628b882/public/Justin_Rich_Resume.pdf"
      );
      const linkedinText = await pdfTextFromUrl(
        "https://raw.githubusercontent.com/justincrich/hackepugbot/d9aa6ecf5aa7a146b42a2947063f08379628b882/public/linkedin_profile.pdf"
      );
      const content = `RESUME:\n${resumeText}\n\nLINKEDIN_PROFILE:\n${linkedinText}`;
      const template = new PromptTemplate({
        template: careerTemplate,
        inputVariables: ["input", "content", "chat_history"],
      });
      const prompt = await template.format({
        input: text,
        content,
        chat_history: history,
      });
      const stream = claude3SonnetModelStreamable.stream(prompt);

      for await (const token of await stream) {
        message += token.content.toString();
        onUpdate(message);
      }
      return message;
    } catch (e: any) {
      args.onError?.(e);
      return message;
    }
  },
};
