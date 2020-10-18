import { keyframes } from "styled-components";

export const easing = "cubic-bezier(0.6,0.5,0.3,1)";

export const scale = keyframes`
  to {
    transform: scale(1);
  }
`;

export const messageBubbleScale = keyframes`
  to {
    transform: scale(1) translate3d(0,0,0);
    height: auto;
    padding: 10px 20px;
  }
`;
