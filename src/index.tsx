import React from "react";
import ReactDOM from "react-dom";
import ChatBot from "./components/chatbot";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }
    body, html {
      background: #f8f8f8;
    }
  `;

ReactDOM.render(
  <>
    <GlobalStyle />
    <ChatBot />, document.getElementById("root")
  </>,
  document.getElementById("root")
);
