import React, { useRef } from "react";
import SendIcon from "../../assets/icons/send-icon";
import { calc, isMathExpression } from "../../lib/math-calc";
import { ActionTypes } from "../use-chat-state";
import { BotMsgs, niceToMeet } from "../bot-messages";
import { ChatInputSection, ChatInputWrapper } from "./chat-input.styled";
import { setValueOnSessionStorage } from "../../lib/handle-storage";

const ChatInput = ({ dispatch, name }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleNoName = () => {
    dispatch({ type: ActionTypes.SetMessage, message: BotMsgs.noname.content });
  };

  const handleSetName = ({ val }) => {
    dispatch({ type: ActionTypes.SetName, name: val });
    setValueOnSessionStorage({ key: "name", value: val });
    dispatch({
      type: ActionTypes.SetMessage,
      message: [niceToMeet(val), ...BotMsgs.letsCalc.content],
    });
  };

  const handleCalc = ({ val }) => {
    const calcResult = calc({ exp: val });
    dispatch({
      type: ActionTypes.SetMessage,
      message: [calcResult.toString(), ...BotMsgs.result.content],
    });
  };

  const handleNoCalc = () => {
    dispatch({
      type: ActionTypes.SetMessage,
      message: BotMsgs.noCalc.content,
    });
  };

  const handleSubmit = () => {
    const { current } = inputRef || null;
    const val = current?.value.trim() || "";

    if (!val) {
      return;
    }

    // set user's input value
    dispatch({ type: ActionTypes.SetMessage, message: [val], isUser: true });

    const isMath = isMathExpression(val);
    setTimeout(() => {
      if (!name) {
        isMath ? handleNoName() : handleSetName({ val });
      } else {
        isMath ? handleCalc({ val }) : handleNoCalc();
      }
    }, 2000);

    if (current) {
      current.value = "";
    }
  };

  return (
    <ChatInputSection>
      <ChatInputWrapper>
        <input type="text" ref={inputRef} />
        <div onClick={() => handleSubmit()}>
          <SendIcon width={24} height={24} />
        </div>
      </ChatInputWrapper>
    </ChatInputSection>
  );
};

export default ChatInput;
