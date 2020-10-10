import styled from "styled-components";
import { colors } from "../../lib/style-utils";

export const ChatBotWrapper = styled.div`
  width: 100%;
  max-width: 414px;
  margin: 0 auto;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
`;

export const ChatInputSection = styled.div`
  width: 100%;
  background: ${colors.Silver100};
  padding: 15px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
`;

export const ChatInputWrapper = styled.div`
  position: relative;
  input {
    border: 1px solid ${colors.Silver400};
    outline: 0;
    height: 40px;
    line-height: 40px;
    width: 100%;
    border-radius: 3px;
    padding: 0 10px;
    transition: box-shadow 0.3s ease;
    &:focus {
      box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
    }
  }
  svg {
    position: absolute;
    right: 10px;
    top: calc(50% - 12px);
    color: ${colors.HotPink};
  }
`;
