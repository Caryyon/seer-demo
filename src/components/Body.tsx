import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { size } from "polished";
import { requestCryptoData } from "../redux/requestCryptoData";
import { useAppDispatch, useAppSelector } from "../hooks";
import SeerLogo from "./SeerLogo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 50px);
  align-items: center;
  justify-content: flex-start;
  padding: 8px 0;
  color: ${({ theme }: { theme: { secondary: string } }) => theme.secondary};
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border: 1px solid
    ${({ theme }: { theme: { secondary: string } }) => theme.secondary};
  width: 96%;
  padding: 16px;
  margin: 8px;
  img {
    ${size("75px", "75px")}
    margin-right: 16px;
  }
  h3 {
    color: ${({ theme }: { theme: { background: string } }) =>
      theme.background};
    margin: 0;
  }
`;

export default function Body() {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const { loading, data, error } = useAppSelector((state) => state.list);
  useEffect(() => {
    requestCryptoData({
      dispatch,
      url: "/currencies/ticker",
      params: {
        key: "92ea800cb44c02ae424198cf401b301e06a116bc",
        "per-page": 15,
        page,
      },
    });
  }, [page, dispatch]);
  if (loading) {
    return <SeerLogo />;
  }
  if (error) {
    return <div>There was an error</div>;
  }
  return (
    <Wrapper>
      {/* @ts-ignore */}
      {data.map(({ id, logo_url, rank }) => {
        return (
          <Card key={id}>
            <img src={logo_url} alt={`${id} logo`} />
            <code>
              <h3>id: {id}</h3>
              <p>rank: {rank}</p>
            </code>
            <div></div>
          </Card>
        );
      })}
    </Wrapper>
  );
}
