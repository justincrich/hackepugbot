import { ANTHROPIC_API_KEY } from "@/env";
import { ChatAnthropic } from "@langchain/anthropic";

export const claude3OpusModel = new ChatAnthropic({
  modelName: "claude-3-opus-20240229",
  temperature: 1,
  clientOptions: {
    apiKey: ANTHROPIC_API_KEY,
  },
  streaming: true,
});

export const claude3SonnetModelStreamable = new ChatAnthropic({
  modelName: "claude-3-sonnet-20240229",
  temperature: 1,
  anthropicApiKey: ANTHROPIC_API_KEY,
  streaming: true,
});

export const claudeInstantModel = new ChatAnthropic({
  modelName: "claude-instant-1.2",
  temperature: 0.5,
  clientOptions: {
    apiKey: ANTHROPIC_API_KEY,
  },
});

export const claude2Model = new ChatAnthropic({
  modelName: "claude-2.0",
  temperature: 0.2,
  clientOptions: {
    apiKey: ANTHROPIC_API_KEY,
  },
});
