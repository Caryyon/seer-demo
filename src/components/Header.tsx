import * as React from "react";
import styled, { css } from "styled-components";
import { Navbar, Alignment } from "@blueprintjs/core";
import SeerButton from "./Button";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toggle } from "../redux/reducers/theme";

const SeerNavbar = styled(Navbar)`
  ${({
    theme,
  }: {
    theme: { background: string; primary: string; secondary: string };
  }) => css`
    box-shadow: none;
    background-color: ${theme.background};
    color: ${theme.primary};
    a {
      color: ${theme.primary};
      &:hover {
        color: ${theme.secondary};
        text-decoration: none;
      }
    }
  `}
`;
const Heading = styled(Link)`
  color: ${({ theme }: { theme: { primary: string } }) => theme.primary};
  &:hover {
    color: ${({ theme }: { theme: { secondary: string } }) => theme.secondary};
    text-decoration: none;
  }
`;

function Header() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(
    (state: { theme: { theme: boolean } }) => state.theme
  );
  return (
    <SeerNavbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Heading to="/">
          <Navbar.Heading>
            <h1>SEER DEMO</h1>
          </Navbar.Heading>
        </Heading>
        <Navbar.Divider />
        <a href="https://github.com/Caryyon/seer-demo">
          <Navbar.Heading>
            <h5>github repo</h5>
          </Navbar.Heading>
        </a>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <SeerButton
          icon={theme ? "moon" : "flash"}
          onClick={() => dispatch(toggle())}
        />
      </Navbar.Group>
    </SeerNavbar>
  );
}
export default Header;
