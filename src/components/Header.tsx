import styled from "styled-components";
import { Navbar, Alignment, Button } from "@blueprintjs/core";
import { Link } from "react-router-dom";

const SeerNavbar = styled(Navbar)`
  box-shadow: none;
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
  return (
    <SeerNavbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Heading to="/">
          <Navbar.Heading>
            <h1>SEER DEMO</h1>
          </Navbar.Heading>
        </Heading>
      </Navbar.Group>
    </SeerNavbar>
  );
}
export default Header;
