import React from "react";
import { BubbleStyled } from "./bubble.styled";

export type PositionType = "" | "top" | "middle" | "bottom";

interface BubbleProps {
  children: React.ReactNode;
  right?: boolean;
  position?: PositionType;
  setAnimation: (currentAnimationIdx) => void;
  currentAnimationIdx: number;
  index: number;
}

const Bubble = ({
  children,
  right = false,
  position,
  setAnimation,
  currentAnimationIdx,
  index,
}: BubbleProps) => {
  return (
    <BubbleStyled
      right={right}
      position={position}
      onAnimationEnd={() => {
        setAnimation(index + 1);
      }}
      play={currentAnimationIdx === index}
    >
      {children}
    </BubbleStyled>
  );
};

export default Bubble;
