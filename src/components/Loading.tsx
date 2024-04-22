import React from "react";

enum Size {
  Small = "Small",
  Regular = "Regular",
}

const DOT_SIZES = {
  [Size.Small]: "w-2 h-2",
  [Size.Regular]: "w-5 h-5",
};

const GAP_SIZES = {
  [Size.Small]: "gap-1",
  [Size.Regular]: "gap-2",
};

export const Loading = ({
  className,
  size = Size.Regular,
}: {
  className?: string;
  size?: Size;
}) => {
  return (
    <div className={`flex ${GAP_SIZES[size]} ${className} shrink`}>
      <div
        className={`${DOT_SIZES[size]} rounded-full animate-pulse bg-dark`}
      ></div>
      <div
        className={`${DOT_SIZES[size]} rounded-full animate-pulse bg-dark`}
      ></div>
      <div
        className={`${DOT_SIZES[size]} rounded-full animate-pulse bg-dark`}
      ></div>
    </div>
  );
};

Loading.Sizes = Size;
