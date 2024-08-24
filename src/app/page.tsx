import React from "react";

import { Header } from "@/components/Header";
import { ChatForm } from "@/components/ChatForm";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <ChatForm />
    </div>
  );
}
