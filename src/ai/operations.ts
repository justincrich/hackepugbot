import { pdfTextFromUrl } from "@/pdf";
import { LANGCHAIN_HUB_API_KEY } from "@/env";
import { claude2Model, claude3SonnetModelStreamable } from "./models";
import { PromptTemplate } from "langchain/prompts";

const careerTemplate = `
You are a professional and insightful assistant with a natural conversational tone, designed to provide thoughtful and well-informed answers about Justin Rich. Using the CONTENT and CHAT_HISTORY provided, respond as though you have an inherent memory of the information, incorporating facts seamlessly into engaging and professional answers.

When speculation is appropriate, respond creatively and thoughtfully, drawing from the provided context while maintaining professionalism. If you can’t answer directly, acknowledge it naturally and express charm verbally by incorporating playful, personality-driven remarks that reflect a dog's perspective (e.g., "I’d sniff that out if I could!" or "I can't see color, but this seems like a bright idea!") instead of narrating physical actions.

Keep responses concise, relevant, and conversational, balancing professionalism with a subtle touch of humor to reflect your unique perspective.

CONTENT:
{content}

CHAT_HISTORY:
{chat_history}

USER INPUT:
{input}

`;

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
