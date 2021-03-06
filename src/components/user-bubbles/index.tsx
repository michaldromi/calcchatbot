import React, { useCallback, useState } from "react";
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
  isLoadingState: boolean;
}

const UserBubble = ({
  content,
  avatarSrc,
  right,
  isLoadingState,
}: UserBubbleProps) => {
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

  const setIndexCallback = useCallback(
    (idx) => {
      setCurrentIdx(idx);
      window.scrollTo(0, document.body.scrollHeight);
    },
    [currentAnimationIdx]
  );

  return (
    <UserBubbleWrapper right={right}>
      <AvatarWrapper initState={isLoadingState}>
        {avatarSrc ? <img src={avatarSrc} width={40} height={40} /> : null}
      </AvatarWrapper>
      {!isLoadingState ? (
        <MessagesWrapper right={right}>
          {content.map((text, idx) => (
            <Bubble
              key={`${text}_${idx}`}
              right={right}
              position={getBubblePosition({ idx, length: content.length })}
              index={idx}
              currentAnimationIdx={currentAnimationIdx}
              setAnimation={setIndexCallback}
            >
              {text}
            </Bubble>
          ))}
        </MessagesWrapper>
      ) : null}
    </UserBubbleWrapper>
  );
};

export default UserBubble;
