import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import styled, { createGlobalStyle } from "styled-components";

import { fontFace } from "./fonts/fontsExport";
import Main from "./components/Main";

const Global = createGlobalStyle`
${fontFace("Roboto", "../fonts/Roboto/Roboto-Bold.ttf", "normal", "bold")}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: rgb(52, 34, 46);
  font-size: 16px;
}
body {
  background-color: rgb(62, 142, 126);
  font-family: 'Roboto', 'sans-serif'
}
`;

ReactDOM.render(
  <React.StrictMode>
    <Global />
    <Header />
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
