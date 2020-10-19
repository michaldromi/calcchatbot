import React from "react";
import { ChatBotWrapper } from "./chatbot.styled";
import { useChatState } from "./use-chat-state";
import MessagePanel from "./messages-panel/index";
import ChatInput from "./chat-input/index";
import { getValueFromSessionStorage } from "../lib/handle-storage";

const ChatBot = () => {
  const name = getValueFromSessionStorage({ key: "name" });
  const { state, dispatch } = useChatState({ name });

  return (
    <ChatBotWrapper>
      <MessagePanel messages={state.messages} />
      <ChatInput dispatch={dispatch} name={state.name} />
    </ChatBotWrapper>
  );
};

export default ChatBot;
