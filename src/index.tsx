import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureAppStore from "./redux/configureAppStore";
// a place to put top level inital paint styles
// may not use this but following proper protocal for SC
const GlobalStyle = createGlobalStyle``;
// added a top level redux provider
// also as a chiled added a SC themeprovider
// so that if we want to switch the theme based on the
// state we are able to and it will trickle down throughout the app
// accordingly.

const store = configureAppStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
