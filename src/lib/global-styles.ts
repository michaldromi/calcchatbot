import { createGlobalStyle } from "styled-components";
import { baseFontSize } from "./style-utils";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Source Sans Pro", "Arial", sans-serif;
    }
    body, html {
      background: whitesmoke;
      font-size: ${baseFontSize}px;
    }
    input {
      -webkit-appearance: none;
    }
  `;
