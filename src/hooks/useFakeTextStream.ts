import { useState, useEffect } from "react";
import { useImmer } from "use-immer";

/**
 * Use this hook to simulate the text streaming of a chatbot.
 * @param text The complete string to be streamed.
 * @param lettersPerSecond The number of letters to stream per second.
 * @returns A stateful value that represents the currently revealed part of the string.
 */
export function useFakeTextStream(args: {
  lettersPerSecond: number;
  onFragment?: (fragment: string, isComplete: boolean) => void;
}): [string, (text: string) => void] {
  // State to hold the current display text
  const [values, setValues] = useImmer({
    displayText: "",
    fullText: "",
  });
  useEffect(() => {
    if (!values.fullText) {
      return () => {};
    }
    // Calculate the interval between letters based on the lettersPerSecond parameter
    const intervalTime = 1000 / args.lettersPerSecond;

    // Reset the display text when text or speed changes
    setValues((draft) => {
      draft.displayText = "";
    });

    // Set an interval to update the display text
    const interval = setInterval(() => {
      setValues((draft) => {
        const nextLength = draft.displayText.length + 1;
        if (nextLength === draft.fullText.length) {
          clearInterval(interval);
          draft.displayText = draft.fullText;
        }
        draft.displayText = draft.fullText.substring(0, nextLength);
        args.onFragment?.(
          draft.displayText,
          draft.displayText.length === draft.fullText.length
        );
      });
    }, intervalTime);

    // Cleanup function to clear the interval when component unmounts or inputs change
    return () => clearInterval(interval);
  }, [args.lettersPerSecond, setValues, values.fullText]);

  return [
    values.displayText,
    (nextFullText) => {
      console.log("nextFullText", nextFullText);
      setValues((draft) => {
        draft.displayText = "";
        draft.fullText = nextFullText;
      });
      args.onFragment?.("", false);
    },
  ];
}
