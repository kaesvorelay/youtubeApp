import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";

import { fontFace } from "./fonts/fontsExport";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

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

const store = setupStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global />
      <Header />
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
