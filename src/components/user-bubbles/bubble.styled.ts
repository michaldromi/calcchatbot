import styled from "styled-components";
import { colors, pxToRem } from "../../lib/style-utils";
import { easing, scale, messageBubbleScale } from "../../lib/animation.styled";
import { PositionType } from "./bubble";

export const UserBubbleWrapper = styled.div<{
  right?: boolean;
}>`
  display: flex;
  align-items: flex-end;
  padding: 10px;

  ${({ right }) => right && "flex-direction: row-reverse;"}
  &:first-child {
    margin-top: auto;
  }
`;

export const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${colors.silver300};
  will-change: transform;
  transform: scale(0);
  animation: 0.3s ${scale} 0.2s ${easing} forwards;
`;

export const BubbleStyled = styled.div<{
  right?: boolean;
  position?: PositionType;
  play?: boolean;
}>`
  max-width: calc(100% - 40px);
  min-width: 100px;
  border-radius: 25px;
  margin-bottom: 5px;
  font-size: ${pxToRem(15)};
  line-height: 1.4;
  will-change: transform;

  &:last-child {
    margin-bottom: 0;
  }

  ${({ position, right }) => setBorderRadius(position, right)}
  ${({ right }) =>
    right
      ? `background: ${colors.darkSmoke};
         color: ${colors.silver100};
         transform-origin: 100% 50%;`
      : `background: ${colors.silver100};
         color: ${colors.darkSmoke}; 
         transform-origin: 0 50%;`}
  
  height: 0;
  overflow: hidden;
  transform: scale(0) translate3d(0, -10px, 0);
  animation: 0.3s ${messageBubbleScale} 0.6s ${easing} forwards;
  animation-play-state: ${({ play }) => (play ? "running" : "paused")};
`;

export const MessagesWrapper = styled.div<{ right?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ right }) =>
    right
      ? "align-items: flex-end; margin-right: 10px;"
      : "margin-left: 10px;"};
`;

const setBorderRadius = (pos, right) => {
  switch (pos) {
    case "top":
      return right
        ? "border-bottom-right-radius: 0;"
        : "border-bottom-left-radius: 0;";
    case "middle":
      return right
        ? "border-top-right-radius: 0; border-bottom-right-radius: 0;"
        : "border-top-left-radius: 0; border-bottom-left-radius: 0;";
    case "bottom":
      return right
        ? "border-top-right-radius: 0;"
        : "border-top-left-radius: 0;";
  }
};
