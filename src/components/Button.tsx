import React from "react";

enum ButtonType {
  Default = "Default",
  Outline = "Outline",
}

const BUTTON_STYLES: Record<ButtonType, string> = {
  [ButtonType.Default]: "bg-sand text-dark border-0",
  [ButtonType.Outline]: "border-2 border-sand text-lite bg-transparent",
};

enum ButtonSize {
  Small = "Small",
  Regular = "Regular",
  Large = "Large",
}

const BUTTON_SIZES: Record<ButtonSize, string> = {
  [ButtonSize.Small]: "h-9",
  [ButtonSize.Regular]: "h-12",
  [ButtonSize.Large]: "h-10",
};

export const Button = ({
  type = ButtonType.Default,
  size = ButtonSize.Regular,
  children,
  disabled,
  onClick,
}: {
  size?: ButtonSize;
  type?: ButtonType;
  children: string;
  disabled?: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      className={`cursor-pointer body2 font-semibold rounded-3xl ${
        BUTTON_STYLES[type]
      } px-4 py-1 ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"
      } ${BUTTON_SIZES[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.Size = ButtonSize;
Button.Type = ButtonType;
