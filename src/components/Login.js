import styled, { keyframes } from "styled-components";
import { Button } from "@blueprintjs/core";
import SeerLogo from "./SeerLogo";

const show = keyframes`
0% {
  opacity: 0;
}
90% {
  opacity: 0;
}
98% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    margin-top: -60px;
    background: transparent !important;
    border-color: ${({ theme }) => theme.secondary} !important;
    animation: ${show} 12s ease-in-out;
    &:hover {
      background: ${({ theme }) => theme.primary} !important;
      border-color: ${({ theme }) => theme.secondary} !important;
      span {
        color: ${({ theme }) => theme.secondary} !important;
      }
    }
    span {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export default function Login({ setAuthed }) {
  return (
    <Backdrop>
      <SeerLogo />
      <Button onClick={() => setAuthed(true)} text="ENTER" />
    </Backdrop>
  );
}
