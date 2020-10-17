import React, { useRef } from "react";
import SendIcon from "../../../assets/icons/send-icon";
import { calc, isMathExpression } from "../../../lib/helpers";
import { ActionTypes } from "../use-chat-state";
import { BotMsgs } from "../bot-messages";
import { ChatInputSection, ChatInputWrapper } from "./chat-input.styled";

const ChatInput = ({ dispatch, name }) => {
  const inputRef = useRef(null);

  const handleNoName = () => {
    dispatch({ type: ActionTypes.SetMessage, message: BotMsgs.noname.content });
  };

  const handleSetName = ({ val }) => {
    dispatch({ type: ActionTypes.SetName, name: val });
    dispatch({
      type: ActionTypes.SetMessage,
      message: [`Nice to meet you ${val}!`, ...BotMsgs.letsCalc.content],
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
    const val = inputRef.current.value.trim();
    const isMath = isMathExpression(val);

    if (!val) {
      return;
    }

    // set user's input value
    dispatch({ type: ActionTypes.SetMessage, message: [val], isUser: true });

    if (!name) {
      isMath ? handleNoName() : handleSetName({ val });
    } else {
      isMath ? handleCalc({ val }) : handleNoCalc();
    }

    inputRef.current.value = "";
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
