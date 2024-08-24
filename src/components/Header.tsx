"use client";
import React from "react";
import { Button } from "./Button";
import Link from "next/link";
import { useDeviceType } from "@/hooks/useDeviceType";

export const Header = () => {
  const { isDesktop } = useDeviceType();
  return (
    <div
      className={`flex ${
        isDesktop ? "flex-row" : "flex-col"
      } w-full px-8 py-4 title2 justify-between mb-4`}
    >
      <Link href="/" className={isDesktop ? "" : "mb-4"}>
        {"<HackerPug/>"}
      </Link>
      <div
        className={`"flex flex-row gap-3" ${isDesktop ? "" : "self-center"}`}
      >
        <Button
          type={Button.Type.Link}
          onClick={() => {
            if (
              typeof document === "undefined" ||
              typeof window === "undefined"
            )
              return;
            document.location.href = "/about";
          }}
          size={Button.Size.Small}
        >
          {isDesktop ? "🧑🏻‍💻 About Me" : "About"}
        </Button>
        <Button
          type={Button.Type.Link}
          onClick={() => {
            if (
              typeof document === "undefined" ||
              typeof window === "undefined"
            )
              return;
            window.open("/Justin_Rich_Resume.pdf", "_blank");
          }}
          size={Button.Size.Small}
        >
          {isDesktop ? "📄 Resume" : "Resume"}
        </Button>
        <Button
          type={Button.Type.Link}
          size={Button.Size.Small}
          onClick={() => {
            if (typeof window === "undefined") return;
            window.open("mailto:justin@hackerpug.com", "mail");
          }}
        >
          {isDesktop ? "👋 Contact" : "Contact"}
        </Button>
      </div>
    </div>
  );
};
