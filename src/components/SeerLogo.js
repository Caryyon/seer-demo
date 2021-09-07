import styled, { keyframes } from "styled-components";
const foreground = "#FBFBFB";
const background = "#193BC9";
const raise = keyframes`
0% {
  margin-top: -30px;
  width: 100px;
  height: 6px;
  filter: blur(0);
}
90% {
  margin-top: -30px;
  width: 100px;
  height: 6px;
  filter: blur(0);
}
100% {
  width: 80px;
  height: 16px;
  filter: blur(2px);
}
`;
const openLid = keyframes`
0% {
  height: 60px;
}
60% {
height: 5px;
}
100% {
height: 15px;
}
`;
const rotate = keyframes`
0% {
  transform: rotate(0deg);
}
85% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(90deg);
}
`;
const look = keyframes`
0% {
  left: 20%;
}
33% {
  left: 40%;
}
66% {
  left: 0%;
}
100% {
  left: 20%;
}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const TriangleUp = styled.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid ${foreground};
`;
const TriangleDown = styled.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;

  border-top: 20px solid ${foreground};
`;
const Eye = styled.div`
  border: 3px solid ${background};
  overflow: hidden;
  position: relative;
  top: -60px;
  background-color: #786fa6;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  animation: ${rotate} 10s ease-in-out;
  transform: rotate(90deg);
`;
const Lid = styled.div`
  position: relative;
  border-bottom: 3px solid ${background};
  top: 0;
  width: 100%;
  height: 15px;
  background-color: ${foreground};
  animation: ${openLid} 3s ease-in-out;
  z-index: 2;
`;
const Pupil = styled.div`
  border-radius: 100%;
  position: absolute;
  top: 15%;
  left: 20%;
  width: 60%;
  height: 60%;
  background-color: ${background};
  z-index: 1;
  animation: ${look} 5s ease-in-out;
  animation-delay: 3s;
  &:hover {
    width: 100%;
    height: 100%;
    left: 0%;
    background-color: #c44569;
    ${Lid} {
      height: 19px;
    }
  }
  transition: all 0.34s ease-in-out;
`;
const Shadow = styled.div`
  margin-top: 20px;
  border-radius: 100%;
  width: 80px;
  height: 16px;
  background-color: #596275;
  filter: blur(2px);
  animation: ${raise} 12s ease-in-out;
`;
export default function SeerLogo() {
  return (
    <Wrapper>
      <TriangleUp />
      <TriangleDown />
      <Eye>
        <Lid />
        <Pupil />
      </Eye>
      <Shadow />
    </Wrapper>
  );
}
