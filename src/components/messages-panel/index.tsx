import React, { memo, useEffect, useState } from "react";
import UserBubble from "../user-bubbles/index";
import { MessagePanelWrapper } from "./panel.styled";
import { delay } from "../../lib/helpers";

const MessagePanel = ({ messages }) => {
  const [isLoadingState, setIsLoadingState] = useState(true);

  useEffect(() => {
    const setInitState = async () => {
      await delay({ func: () => setIsLoadingState(false) });
    };

    setInitState();
  }, []);

  const getAvatar = (isUser) => {
    if (isUser) {
      return "../../assets/iconfinder_cactus_cacti_avatar_pirate_4043242.svg";
    }
    return "../../assets/iconfinder_female_woman_avatar_portrait_1_4043247.svg";
  };

  return (
    <MessagePanelWrapper>
      {messages.map((it, idx) => (
        <UserBubble
          key={`${it.content}_${idx}`}
          content={it.content}
          avatarSrc={getAvatar(it.isUser)}
          right={it.isUser}
          isLoadingState={idx === 0 && isLoadingState}
        />
      ))}
    </MessagePanelWrapper>
  );
};

export default memo(MessagePanel);
