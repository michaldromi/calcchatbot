import React from "react";
import ReactDOM from "react-dom";
import ChatBot from "./components/chatbot/chatbot";
import { GlobalStyle } from "./lib/global-styles";

ReactDOM.render(
  <>
    <GlobalStyle />
    <ChatBot />
  </>,
  document.getElementById("root")
);
