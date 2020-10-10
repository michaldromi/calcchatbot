import React, { useEffect, useRef, useState } from "react";
import {
  ChatBotWrapper,
  ChatInputSection,
  ChatInputWrapper,
} from "./chatbot.styled";
import SendIcon from "../../assets/icons/send-icon";
import { isMathExpression } from "../../lib/helpers";
import { data } from "./steps";
import UserBubble from "./user-bubbles";

const ChatBot = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState("");
  const [val, setVal] = useState("");

  useEffect(() => {
    // console.log(val);
  }, [val]);

  const handleSubmit = () => {
    const val = inputRef.current.value.trim();
    const isMath = isMathExpression(val);

    if (!name) {
      isMath ? console.log("no name") : setName(val);
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
