"use client";

import React from "react";
import { Interweave } from "interweave";
import { useImmerReducer } from "use-immer";
import debounce from "lodash/debounce";
import { v4 as uuid } from "uuid";
import { Loading } from "@/components/Loading";
import { ChatInput } from "@/components/ChatInput";
import { useHasChanged } from "@/hooks/useHasChanged";
import { streamingFetch } from "@/streamFetch";
import Image from "next/image";
import { Spacer } from "./Spacer";

type MessageType = {
  text: string;
  isUser: boolean;
  id: string;
};

type State = {
  isLoading: boolean;
  draftMessage: string;
  messages: MessageType[];
  activeMessageId: string;
  isAIGenerating: boolean;
  error: Error | null;
};

const initialState: State = {
  isLoading: false,
  draftMessage: "",
  activeMessageId: "",
  isAIGenerating: false,
  error: null,
  messages: [],
};

enum ActionType {
  SET_ERROR = "SET_ERROR",
  SET_IS_LOADING = "SET_IS_LOADING",
  INIT_AI_MESSAGE = "INIT_AI_MESSAGE",
  CONCLUDE_AI_MESSAGE = "CONCLUDE_AI_MESSAGE",
  SET_AI_MESSAGE = "SET_AI_MESSAGE",
  SUBMIT_USER_MESSAGE = "SUBMIT_USER_MESSAGE",
  UPDATE_AI_MESSAGE = "UPDATE_AI_MESSAGE",
  SET_DRAFT_MESSAGE = "SET_DRAFT_MESSAGE",
}

type Action<T extends ActionType, P = undefined> = P extends undefined
  ? { type: T }
  : { type: T; payload: P };

type Actions =
  | Action<ActionType.SET_ERROR, Error>
  | Action<ActionType.SUBMIT_USER_MESSAGE, string>
  | Action<ActionType.SET_DRAFT_MESSAGE, string>
  | Action<ActionType.SET_IS_LOADING, boolean>
  | Action<
      ActionType.UPDATE_AI_MESSAGE,
      {
        text: string;
      }
    >
  | Action<ActionType.INIT_AI_MESSAGE, { id: string }>
  | Action<ActionType.CONCLUDE_AI_MESSAGE, { text: string }>;

const baseQuestions = [
  "Where did Justin go to school? 🎓",
  "What projects is Justin working on? 🚧",
  "Where has Justin worked? 💼",
];

export const ChatForm = () => {
  const scrollBodyRef = React.useRef<HTMLDivElement>(null);
  const [state, dispatch] = useImmerReducer((state: State, action: Actions) => {
    switch (action.type) {
      case ActionType.SET_DRAFT_MESSAGE:
        state.draftMessage = action.payload;
        return;
      case ActionType.SUBMIT_USER_MESSAGE:
        state.messages.push({
          id: uuid(),
          text: action.payload,
          isUser: true,
        });
        state.draftMessage = "";
        break;
      case ActionType.INIT_AI_MESSAGE:
        state.activeMessageId = action.payload.id;
        state.messages.push({
          id: action.payload.id,
          text: "...",
          isUser: false,
        });
        state.isAIGenerating = true;
        break;
      case ActionType.CONCLUDE_AI_MESSAGE:
        state.isAIGenerating = false;
        state.messages[state.messages.length - 1].text = action.payload.text;
        return;
      case ActionType.UPDATE_AI_MESSAGE:
        let messageIndex = state.messages.findIndex(
          (message) => message.id === state.activeMessageId
        );
        if (messageIndex === -1) messageIndex = state.messages.length;
        state.messages[messageIndex] = {
          id: state.activeMessageId,
          isUser: false,
          text: action.payload.text,
        };
        return;
      case ActionType.SET_IS_LOADING:
        state.isLoading = action.payload;
        return;
      default:
        return;
    }
  }, initialState);
  useHasChanged(state.messages, () => {
    if (scrollBodyRef.current) {
      scrollBodyRef.current.scrollTop = scrollBodyRef.current.scrollHeight;
    }
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = React.useCallback(
    debounce((value: string) => {
      dispatch({
        type: ActionType.UPDATE_AI_MESSAGE,
        payload: {
          text: value,
        },
      });
    }, 100),
    []
  );
  const handleSendMessage = async (nextMessage: string) => {
    const nextUserMessage = {
      id: "unknown",
      text: nextMessage,
      isUser: true,
    };

    dispatch({
      type: ActionType.SUBMIT_USER_MESSAGE,
      payload: nextMessage,
    });
    try {
      const aiMessageId = uuid();
      dispatch({
        type: ActionType.INIT_AI_MESSAGE,
        payload: {
          id: aiMessageId,
        },
      });
      const it = streamingFetch("/api/chatStream", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...state.messages, nextUserMessage],
        }),
      });
      let latestValue = "";
      for await (let value of it) {
        latestValue = value;
        debouncedChangeHandler(latestValue);
      }
      dispatch({
        type: ActionType.CONCLUDE_AI_MESSAGE,
        payload: {
          text: latestValue,
        },
      });
    } catch (e) {
      const error = e as Error;
      dispatch({ type: ActionType.SET_ERROR, payload: error });
    }
  };
  console.log("state", state);

  return (
    <div
      className={`flex flex-col px-4 flex-1 ${
        state.messages.length ? "w-full items-center" : ""
      }`}
    >
      <div
        className={`w-full max-w-[480px] ${
          state.messages.length ? "hidden" : ""
        }`}
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
      <div
        className={`px-4 flex-grow flex-shrink-0 flex flex-col relative max-w-[600px] ${
          state.messages.length ? "h-full w-full" : ""
        }`}
      >
        {state.messages.length ? (
          <div
            ref={scrollBodyRef}
            className="absolute inset-0 flex flex-col items-center overflow-y-auto mb-[100px] "
          >
            {state.messages.map((message, index) => {
              const BOT_STYLES = `bg-sand self-end text-dark`;
              const USER_STYLES = `bg-light-brown text-lite self-start`;
              return (
                <div
                  className={`flex shrink flex-col w-full max-w-[350px] rounded p-3 text-wrap ${
                    message.isUser ? USER_STYLES : BOT_STYLES
                  } ${index === 0 ? "" : "mt-6"}`}
                  key={message.text}
                >
                  {message.text === "..." ? (
                    <Loading size={Loading.Sizes.Small} />
                  ) : (
                    <Interweave
                      content={message.text.replace(/\n/g, "<br/>")}
                    />
                  )}
                </div>
              );
            })}
          </div>
        ) : null}
        <ChatInput
          className={`my-8 w-full bottom-0 mt-8 ${
            state.messages.length ? "absolute" : ""
          }`}
          onChange={(nextMessage) => {
            dispatch({
              type: ActionType.SET_DRAFT_MESSAGE,
              payload: nextMessage,
            });
          }}
          value={state.draftMessage}
          onSend={() => {
            if (state.draftMessage.length === 0 || state.isAIGenerating) return;
            handleSendMessage(state.draftMessage);
          }}
          placeholder="Ask me about Justin..."
          submitDisabled={
            state.isAIGenerating || state.draftMessage.length === 0
          }
        />
      </div>

      <div
        className={`w-full max-w-[480px] ${
          state.messages.length ? "hidden" : ""
        }`}
      >
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
              className={`w-fullhover:opacity-80 body1 semibold cursor-pointer w-fill p-4 rounded border-2 border-sand bg-light-brown ${
                index === 0 ? "" : "mt-4"
              }`}
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
