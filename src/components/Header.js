import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Navbar, Alignment, Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";

const SeerNavbar = styled(Navbar)`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary} !important;
  button {
    color: ${({ theme }) => theme.primary} !important;
  }
`;
const Heading = styled(Link)`
  color: ${({ theme }) => theme.primary} !important;
`;

function Header() {
  const [affirmation, setAffirmation] = useState("test");
  useEffect(() => {
    async function getAffirmation() {
      const { data } = await axios.get("https://www.affirmations.dev/");
      console.log(data);
      setAffirmation(data);
    }
    getAffirmation();
  }, []);
  return (
    <SeerNavbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Heading to="/">
          <Navbar.Heading>SEER DEMO</Navbar.Heading>
        </Heading>
        <Navbar.Divider />
        <Link to="/playlist">
          <Button className="bp3-minimal" icon="list" text="Playlist" />
        </Link>
        <Navbar.Divider />
        <Button text={affirmation} />
      </Navbar.Group>
    </SeerNavbar>
  );
}
export default Header;
