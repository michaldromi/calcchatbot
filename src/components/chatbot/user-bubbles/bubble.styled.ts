import styled from "styled-components";
import { colors, pxToRem } from "../../../lib/style-utils";
import { scale, easing } from "../../../lib/animation.styled";

export const UserBubbleWrapper = styled.div<{ right?: boolean }>`
  display: flex;
  align-items: flex-start;
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
  background: ${colors.Silver300};
  transform: scale(0);
  animation: 0.3s ${scale} 0.2s ${easing} forwards;
`;

export const BubbleStyled = styled.div<{
  right?: boolean;
  position?: ["top", "middle", "bottom"];
  play?: boolean;
}>`
  max-width: calc(100% - 40px);
  min-width: 100px;
  border-radius: 25px;
  display: inline-block;
  margin-bottom: 5px;
  padding: 12px 20px;
  font-size: ${pxToRem(15)};
  line-height: 1.4;

  ${({ position, right }) => setBorderRadius(position, right)}
  ${({ right }) =>
    right
      ? `background: ${colors.DarkSmoke};
         color: ${colors.Silver100};
         transform-origin: 100% 50%;`
      : `background: ${colors.Silver100};
         color: ${colors.DarkSmoke}; 
         transform-origin: 0 50%;`}
  
  transform: scale(0);
  animation: 0.3s ${scale} 0.6s ${easing} forwards;
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
