import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
`;

export default function Body() {
  return (
    <Wrapper>
      <h2>Welcome to Cary's Seer Demo</h2>
      <p>I'd suggest going to check out the playist ☝️</p>
    </Wrapper>
  );
}
