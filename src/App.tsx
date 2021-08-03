import React from "react";
import { Navbar, Alignment, Button } from "@blueprintjs/core";
import { PostsList } from "./components/PostList";

function App() {
  return (
    <div>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>SEER</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
          <Button className="bp3-minimal" icon="document" text="Files" />
        </Navbar.Group>
      </Navbar>
      <PostsList />
    </div>
  );
}

export default App;
