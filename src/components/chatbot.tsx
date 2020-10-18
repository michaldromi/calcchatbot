import React, { useReducer } from "react";
import { ChatBotWrapper } from "./chatbot.styled";
import { chatReducer } from "./use-chat-state";
import MessagePanel from "./messages-panel/index";
import { BotMsgs } from "./bot-messages";
import ChatInput from "./chat-input/index";

const ChatBot = () => {
  const [state, dispatch] = useReducer(chatReducer, {
    name: "",
    messages: [{ content: BotMsgs.hello.content }],
  });

  return (
    <ChatBotWrapper>
      <MessagePanel messages={state.messages} />
      <ChatInput dispatch={dispatch} name={state.name} />
    </ChatBotWrapper>
  );
};

export default ChatBot;
