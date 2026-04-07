import React from "react";
import { Button } from "./Button";
import Link from "next/link";
import { User, FolderGit2, NotebookPen, FileText, Mail } from "lucide-react";

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
        <Link href="/projects">
          <Button type={Button.Type.Link} size={Button.Size.Small}>
            Projects
          </Button>
        </Link>
        <Link href="https://hackerpug.ghost.io/" target="_blank">
          <Button type={Button.Type.Link} size={Button.Size.Small}>
            Blog
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
            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" strokeWidth={1.5} />About Me</span>
          </Button>
        </Link>
        <Link href="/projects">
          <Button type={Button.Type.Link} size={Button.Size.Small}>
            <span className="flex items-center gap-1.5"><FolderGit2 className="w-3.5 h-3.5" strokeWidth={1.5} />Projects</span>
          </Button>
        </Link>
        <Link href="https://hackerpug.ghost.io/" target="_blank">
          <Button type={Button.Type.Link} size={Button.Size.Small}>
            <span className="flex items-center gap-1.5"><NotebookPen className="w-3.5 h-3.5" strokeWidth={1.5} />Blog</span>
          </Button>
        </Link>
        <Link href="/Justin_Rich_Resume.pdf" target="_blank">
          <Button type={Button.Type.Link} size={Button.Size.Small}>
            <span className="flex items-center gap-1.5"><FileText className="w-3.5 h-3.5" strokeWidth={1.5} />Resume</span>
          </Button>
        </Link>
        <Link href="mailto:justin@hackerpug.com">
          <Button type={Button.Type.Link} size={Button.Size.Small}>
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" strokeWidth={1.5} />Contact</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
