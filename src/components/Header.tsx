import React from "react";
import { Button } from "./Button";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex md:flex-col w-full px-8 py-4 title2 justify-between mb-4">
      <Link href="/" className="mb-4">
        {"<HackerPug/>"}
      </Link>
      {/* Mobile Header */}
      <div className="flex-row gap-3 self-center md:flex hidden">
        <Link href="/about">
          <Button type={Button.Type.Link} size={Button.Size.Small}>
            About
          </Button>
        </Link>
        <Link href="/Justin_Rich_Resume.pdf" target="_blank">
          <Button type={Button.Type.Link} size={Button.Size.Small}>
            Resume
          </Button>
        </Link>
        <Link href="mailto:justin@hackerpug.com">
          <Button type={Button.Type.Link} size={Button.Size.Small}>
            Contact
          </Button>
        </Link>
      </div>

      {/* Desktop Header */}
      <div className="md:hidden flex flex-row gap-3">
        <Link href="/about">
          <Button type={Button.Type.Link} size={Button.Size.Small}>
            🧑🏻‍💻 About Me
          </Button>
        </Link>
        <Link href="/Justin_Rich_Resume.pdf" target="_blank">
          <Button type={Button.Type.Link} size={Button.Size.Small}>
            📄 Resume
          </Button>
        </Link>
        <Link href="mailto:justin@hackerpug.com">
          <Button type={Button.Type.Link} size={Button.Size.Small}>
            👋 Contact
          </Button>
        </Link>
      </div>
    </div>
  );
};
