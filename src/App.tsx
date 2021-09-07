import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }: { theme: { white: string } }) => theme.white};
  border: 15px solid
    ${({ theme }: { theme: { background: string } }) => theme.background};
  box-sizing: border-box;
`;

function App() {
  return (
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
  );
}

export default App;
