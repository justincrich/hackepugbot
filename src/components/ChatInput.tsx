import React from "react";
import { Button } from "./Button";

export const ChatInput = ({
  className,
  placeholder,
  value,
  submitDisabled,
  onChange,
  onSend,
}: {
  className?: string;
  placeholder?: string;
  value?: string;
  submitDisabled?: boolean;
  onChange: (value: string) => void;
  onSend: () => void;
}) => {
  return (
    <div className={`flex p-3 rounded-3xl bg-light-brown ${className}`}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter" && onSend && !submitDisabled) {
            onSend();
          }
        }}
        className="body1 placeholder:text-cream text-white w-full bg-transparent outline-none"
      />
      <Button
        disabled={submitDisabled}
        onClick={onSend}
        size={Button.Size.Small}
      >
        Send
      </Button>
    </div>
  );
};
