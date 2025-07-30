import React from "react";

import { Header } from "@/components/Header";
import { ProfessionalIntro } from "@/components/ProfessionalIntro";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <ProfessionalIntro />
    </div>
  );
}
