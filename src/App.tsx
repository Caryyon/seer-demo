import { useState } from "react";
import Login from "./components/Login";
import styled from "styled-components";
import Header from "./components/Header";
import Playlist from "./pages/Playlist";
import Body from "./components/Body";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

function App() {
  const [authed, setAuthed] = useState(false);
  if (authed) {
    return (
      <Router>
        <Wrapper>
          <Header />
          <Switch>
            <Route path="/playlist">
              <Playlist />
            </Route>
            <Route path="/">
              <Body />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    );
  }
  return <Login setAuthed={setAuthed} />;
}

export default App;
