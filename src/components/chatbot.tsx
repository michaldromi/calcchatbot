import React, { useReducer } from "react";
import { ChatBotWrapper } from "./chatbot.styled";
import { chatReducer } from "./use-chat-state";
import MessagePanel from "./messages-panel/index";
import { BotMsgs, getHasNameContent } from "./bot-messages";
import ChatInput from "./chat-input/index";
import { getValueFromSessionStorage } from "../lib/handle-storage";

const ChatBot = () => {
  const name = getValueFromSessionStorage({ key: "name" });
  const [state, dispatch] = useReducer(chatReducer, {
    name,
    messages: [
      name
        ? {
            content: [...getHasNameContent(name)],
          }
        : { content: BotMsgs.hello.content },
    ],
  });

  return (
    <ChatBotWrapper>
      <MessagePanel messages={state.messages} />
      <ChatInput dispatch={dispatch} name={state.name} />
    </ChatBotWrapper>
  );
};

export default ChatBot;
