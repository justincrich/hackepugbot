"use client";
import React from "react";
import { Button } from "./Button";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex flex-row w-full px-8 py-4 title2 justify-between mb-4">
      <Link href="/">{"<HackerPug/>"}</Link>
      <div className="flex flex-row gap-3">
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
          🧑🏻‍💻 About Me
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
          📄 Resume
        </Button>
        <Button
          type={Button.Type.Link}
          size={Button.Size.Small}
          onClick={() => {
            if (typeof window === "undefined") return;
            window.open("mailto:justin@hackerpug.com", "mail");
          }}
        >
          👋 Contact
        </Button>
      </div>
    </div>
  );
};
