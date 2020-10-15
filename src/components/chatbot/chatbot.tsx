import React, { useEffect, useReducer, useRef, useState } from "react";
import {
  ChatBotWrapper,
  ChatInputSection,
  ChatInputWrapper,
} from "./chatbot.styled";
import SendIcon from "../../assets/icons/send-icon";
import { isMathExpression } from "../../lib/helpers";
import { data } from "./steps";
import UserBubble from "./user-bubbles";
import { ActionTypes, chatReducer, ChatState, Steps } from "./use-chat-state";

const ChatBot = () => {
  const inputRef = useRef(null);

    const [state, dispatch] = useReducer(chatReducer, {
      name: "",
      step: Steps.hello,
  };

  const handleSubmit = () => {
    const val = inputRef?.current?.value.trim();
    const isMath = isMathExpression(val);

    if (!name) {
      isMath ? dispatch({type: ActionTypes.SetStep,step:Steps.noname}) : dispatch({type: ActionTypes.SetName,name:val});
    } else {
      isMath ? console.log("calc", val) : console.log("try again");
    }
  };

  return (
    <ChatBotWrapper>

      <UserBubble content={data.hello.message} avatarSrc="../../assets/iconfinder_female_woman_avatar_portrait_1_4043247.svg" />

      <ChatInputSection>
        <ChatInputWrapper>
          <input type="text" ref={inputRef} />
          <div onClick={() => handleSubmit()}>
            <SendIcon width={24} height={24} />
          </div>
        </ChatInputWrapper>
      </ChatInputSection>
    </ChatBotWrapper>
  );
};

export default ChatBot;
