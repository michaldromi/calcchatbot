import React, { useState } from "react";
import {
  AvatarWrapper,
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
  const [currentAnimationIdx, setCurrentIdx] = useState(0);

  const getBubblePosition = ({ idx, length }) => {
    if (length <= 1) {
      return "";
    } else if (idx === 0) {
      return "top";
    } else if (idx === length - 1) {
      return "bottom";
    } else {
      return "middle";
    }
  };

  return (
    <UserBubbleWrapper right={right}>
      <AvatarWrapper>
        {avatarSrc ? <img src={avatarSrc} width={40} height={40} /> : null}
      </AvatarWrapper>
      <MessagesWrapper right={right}>
        {content.map((text, idx) => (
          <Bubble
            key={`${text}_${idx}`}
            right={right}
            position={getBubblePosition({ idx, length: content.length })}
            index={idx}
            currentAnimationIdx={currentAnimationIdx}
            setAnimation={setCurrentIdx}
          >
            {text}
          </Bubble>
        ))}
      </MessagesWrapper>
    </UserBubbleWrapper>
  );
};

export default UserBubble;
