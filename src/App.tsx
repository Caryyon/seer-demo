import * as React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import { useAppSelector } from "./hooks";

// a place to put top level inital paint styles
// may not use this but following proper protocal for SC
const GlobalStyle = createGlobalStyle`
  html, body {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }: { theme: { white: string } }) => theme.white};
  border: 15px solid
    ${({ theme }: { theme: { background: string } }) => theme.background};
  box-sizing: border-box;
`;

const lightTheme = {
  background: "#193BC9",
  white: "#FBFBFB",
  primary: "#FBFBFB",
  secondary: "#95a5a6",
};
const darkTheme = {
  background: "#e74c3c",
  white: "#34495e",
  primary: "#FBFBFB",
  secondary: "#ecf0f1",
};

function App() {
  const { theme } = useAppSelector(
    (state: { theme: { theme: boolean } }) => state.theme
  );
  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <React.StrictMode>
        <Router>
          <Wrapper>
            <Header />
            <Switch>
              <Route path="/">
                <Body />
              </Route>
            </Switch>
          </Wrapper>
        </Router>
      </React.StrictMode>
    </ThemeProvider>
  );
}

export default App;
