import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import Modal from "./components/Pop-Up/PopUpConyainer";

import { fontFace } from "./fonts/fontsExport";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import AnalyticsPage from "./pages/AnalyticsPage";

const Global = createGlobalStyle`
${fontFace("Roboto", "../fonts/Roboto", "normal", "bold")}
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
    <BrowserRouter>
      <Provider store={store}>
        <Global />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
        </Routes>
        <Modal />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
