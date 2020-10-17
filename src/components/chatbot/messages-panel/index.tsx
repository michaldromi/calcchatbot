import React from "react";
import UserBubble from "../user-bubbles/index";
import { MessagePanelWrapper } from "./panel.styled";

const MessagePanel = ({ messages }) => {
  const getAvatar = (isUser) => {
    if (isUser) {
      return "../../assets/iconfinder_cactus_cacti_avatar_pirate_4043242.svg";
    }
    return "../../assets/iconfinder_female_woman_avatar_portrait_1_4043247.svg";
  };

  return (
    <MessagePanelWrapper>
      {messages.map((it) => (
        <UserBubble
          content={it.content}
          avatarSrc={getAvatar(it.isUser)}
          right={it.isUser}
        />
      ))}
    </MessagePanelWrapper>
  );
};

export default MessagePanel;
