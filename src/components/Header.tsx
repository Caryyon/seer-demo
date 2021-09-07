import React from "react";
import styled, { css } from "styled-components";
import { Navbar, Alignment } from "@blueprintjs/core";
import SeerButton from "./Button";
import { Link } from "react-router-dom";

const SeerNavbar = styled(Navbar)`
  ${({ theme }: { theme: { background: string; primary: string } }) => css`
    box-shadow: none;
    background-color: ${theme.background};
    color: ${theme.primary};
  `}
`;
const Heading = styled(Link)`
  color: ${({ theme }: { theme: { primary: string } }) => theme.primary};
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
      <Navbar.Group align={Alignment.RIGHT}>
        <SeerButton icon={"moon"} />
      </Navbar.Group>
    </SeerNavbar>
  );
}
export default Header;
