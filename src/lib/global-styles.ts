import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Source Sans Pro", "Arial", sans-serif;
    }
    body, html {
      background: whitesmoke;
    }
    input {
      -webkit-appearance: none;
    }
  `;
