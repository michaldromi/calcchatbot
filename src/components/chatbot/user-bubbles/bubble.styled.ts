import styled from "styled-components";
import { colors } from "../../../lib/style-utils";

export const UserBubbleWrapper = styled.div<{ right?: boolean }>`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  ${({ right }) =>
    right
      ? "flex-direction: row-reverse; justify-content: flex-end;"
      : "justify-content: flex-start;"}
  img {
    border-radius: 50%;
  }
`;

export const BubbleStyled = styled.div<{
  right?: boolean;
  position?: ["top", "middle", "bottom"];
}>`
  width: 100%;
  max-width: calc(100% - 40px);
  min-width: 270px;
  border-radius: 27px;
  display: inline-block;
  margin-bottom: 5px;
  padding: 20px;
  line-height: 1.4;
  ${({ position, right }) => setBorderRadius(position, right)}
  ${({ right }) =>
    right
      ? `
    background: ${colors.DarkSmoke};
    color: ${colors.Silver100};
  `
      : `background: ${colors.Silver100};
       color: ${colors.DarkSmoke};`}
`;

export const MessagesWrapper = styled.div<{ right?: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ right }) =>
    right
      ? "align-items: flex-end; margin-right: 10px;"
      : "margin-left: 10px;"};
`;

export const AvatarPlaceholder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${colors.HotPink};
`;

const setBorderRadius = (pos, right) => {
  switch (pos) {
    case "top":
      return right
        ? "border-bottom-right-radius: 0;"
        : "border-bottom-left-radius: 0;";
    case "middle":
      return right
        ? "border-top-left-radius: 0; border-bottom-left-radius: 0;"
        : "border-top-right-radius: 0; border-bottom-right-radius: 0;";
    case "bottom":
      return right
        ? "border-top-right-radius: 0;"
        : "border-top-left-radius: 0;";
  }
};
