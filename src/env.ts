export const loadEnvVar = (key: string): string | never => {
  const value = process.env[key];
  if (!value) {
    console.log(`[ENV]: variable ${key} not loaded`);
    return "";
  }
  return value;
};

export const ANTHROPIC_API_KEY = loadEnvVar("ANTHROPIC_API_KEY");
export const LANGCHAIN_HUB_API_KEY = loadEnvVar("LANGCHAIN_HUB_API_KEY");
