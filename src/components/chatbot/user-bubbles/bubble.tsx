import React from "react";
import { BubbleStyled } from "./bubble.styled";

interface BubbleProps {
  children: React.ReactNode;
  right?: boolean;
  position?: string;
}

const Bubble = ({ children, right = false, position }: BubbleProps) => {
  return (
    <BubbleStyled right={right} position={position}>
      {children}
    </BubbleStyled>
  );
};

export default Bubble;
