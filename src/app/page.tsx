"use client";
import React from "react";
import { useImmerReducer } from "use-immer";
import { Spacer } from "@/components/Spacer";
import Image from "next/image";
import { ChatInput } from "@/components/ChatInput";
import { sendMessage } from "./actions";
import { Button } from "@/components/Button";

const baseQuestions = [
  "Where did Justin go to school? 🎓",
  "What projects is Justin working on? 🚧",
  "Where has Justin worked? 💼",
];

type MessageType = {
  text: string;
  isUser: boolean;
};

type State = {
  isLoading: boolean;
  draftMessage: string;
  messages: MessageType[];
  error: Error | null;
};

const initialState: State = {
  isLoading: false,
  draftMessage: "",
  error: null,
  messages: [
    {
      text: "l;aksdjfl;askdj 'akls;djf;laskdjf ;lksdf;laskdjf ;kljsdf;laksdjf",
      isUser: true,
    },
    {
      text: "l;aksdjfl;askdj 'akls;djf;laskdjf ;lksdf;laskdjf ;kljsdf;laksdjf",
      isUser: false,
    },
  ],
};

enum ActionType {
  SET_ERROR = "SET_ERROR",
  SET_AI_MESSAGE = "SET_AI_MESSAGE",
  SUBMIT_MESSAGE = "SUBMIT_MESSAGE",
  SET_DRAFT_MESSAGE = "SET_DRAFT_MESSAGE",
}

type Action<T extends ActionType, P = undefined> = P extends undefined
  ? { type: T }
  : { type: T; payload: P };

type Actions =
  | Action<ActionType.SUBMIT_MESSAGE, string>
  | Action<ActionType.SET_ERROR, Error>
  | Action<ActionType.SET_AI_MESSAGE, string>
  | Action<ActionType.SET_DRAFT_MESSAGE, string>;

export default function Home() {
  const [state, dispatch] = useImmerReducer((state: State, action: Actions) => {
    switch (action.type) {
      case ActionType.SUBMIT_MESSAGE:
        state.isLoading = true;
        state.messages.push({
          text: action.payload,
          isUser: true,
        });
        state.draftMessage = "";
        return;
      case ActionType.SET_DRAFT_MESSAGE:
        state.draftMessage = action.payload;
        return;
      case ActionType.SET_AI_MESSAGE:
        state.isLoading = false;
        state.messages.push({
          text: action.payload,
          isUser: false,
        });
        return;
      default:
        return;
    }
  }, initialState);
  const handleSendMessage = async (nextMessage: string) => {
    try {
      dispatch({ type: ActionType.SUBMIT_MESSAGE, payload: nextMessage });
      const nextAIMessage = await sendMessage(nextMessage);
      console.log("next msg", nextAIMessage);
      dispatch({
        type: ActionType.SET_AI_MESSAGE,
        payload: nextAIMessage,
      });
    } catch (e) {
      const error = e as Error;
      dispatch({ type: ActionType.SET_ERROR, payload: error });
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center">
      {state.messages.length ? (
        <div className="flex flex-row w-full px-8 py-4 title2 justify-between">
          {"<HackerPug/>"}
          <div className="flex flex-row gap-3">
            <Button
              type={Button.Type.Outline}
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
              Resume 📄
            </Button>
            <Button
              size={Button.Size.Small}
              onClick={() => {
                if (typeof window === "undefined") return;
                window.open("mailto:justin@hackerpug.com", "mail");
              }}
            >
              Contact 📫
            </Button>
          </div>
        </div>
      ) : null}
      <div
        className={`p-24 flex flex-col items-center h-full ${
          state.messages.length ? "w-full max-w-[800px] min-w-[480px]" : ""
        }`}
      >
        <div
          className={`max-w-[480px] ${state.messages.length ? "hidden" : ""}`}
        >
          <Image
            src={"/hero.png"}
            alt="hero"
            width={480}
            height={218}
            className="rounded"
          />
          <Spacer height={8} />
          <h1 className="title1">{`Hi, I'm HackerPug! 🐶`}</h1>
          <Spacer height={8} />
          <p className="body1">
            {`I'm a friendly AI assistant, here to help you learn more about Justin's
          professional background.`}
          </p>
        </div>
        <div className="w-full flex grow shrink-0 flex-col items-center justify-start overflow-auto">
          {state.messages.map((message, index) => {
            const BOT_STYLES = `bg-sand self-end text-dark`;
            const USER_STYLES = `bg-light-brown text-lite self-start`;
            return (
              <div
                className={`flex flex-col w-[400px] rounded p-3 text-wrap ${
                  message.isUser ? USER_STYLES : BOT_STYLES
                } ${index === 0 ? "" : "mt-6"}`}
                key={message.text}
              >
                {message.text}
              </div>
            );
          })}
        </div>
        <Spacer height={8} />
        <ChatInput
          className={`w-[480px] ${state.messages.length ? "mt-auto" : ""}`}
          onChange={(nextMessage) => {
            dispatch({
              type: ActionType.SET_DRAFT_MESSAGE,
              payload: nextMessage,
            });
          }}
          value={state.draftMessage}
          onSend={() => {
            handleSendMessage(state.draftMessage);
          }}
          placeholder="Ask me about Justin..."
          submitDisabled={state.isLoading}
        />
        <div className={`w-[480px] ${state.messages.length ? "hidden" : ""}`}>
          <Spacer height={8} />
          <p className="title2">You can ask me things like:</p>
          <Spacer height={8} />
          <div className="flex flex-col w-full">
            {baseQuestions.map((question, index) => (
              <button
                onClick={() => {
                  handleSendMessage(question);
                }}
                key={question + index}
                className={`hover:opacity-80 body1 semibold cursor-pointer w-fill p-4 rounded border-2 border-sand bg-light-brown ${
                  index === 0 ? "" : "mt-4"
                }`}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
