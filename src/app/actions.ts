"use server";

export const sendMessage = async (message: string): Promise<string> => {
  console.log("server", typeof window === "undefined");
  return "howdy";
};
