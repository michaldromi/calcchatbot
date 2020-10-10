import React from "react";
import {
  AvatarPlaceholder,
  MessagesWrapper,
  UserBubbleWrapper,
} from "./bubble.styled";
import Bubble from "./bubble";

interface UserBubbleProps {
  content: Array<React.ReactNode>;
  avatarSrc?: string;
  right?: boolean;
}

const UserBubble = ({ content, avatarSrc, right }: UserBubbleProps) => {

  const getBubblePosition = ({ idx, length }) => {
    if (length <= 1) {
      return "";
    } else if (idx === 0) {
      return "top";
    } else if (idx === length - 1) {
      return "bottom";
    }

    return "middle";
  };

  return (
    <UserBubbleWrapper right={right}>
      {avatarSrc ? (
        <img src={avatarSrc} width={40} height={40} />
      ) : (
        <AvatarPlaceholder />
      )}
      <MessagesWrapper right={right}>
        {content.map((text, idx) => (
          <Bubble
            right={right}
            position={getBubblePosition({ idx, length: content.length })}
          >
            {text}
          </Bubble>
        ))}
      </MessagesWrapper>
    </UserBubbleWrapper>
  );
};

export default UserBubble;
