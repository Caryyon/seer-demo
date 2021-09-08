import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { size } from "polished";
import { Icon } from "@blueprintjs/core";
import { requestCryptoData } from "../redux/requestCryptoData";
import { useAppDispatch, useAppSelector } from "../hooks";
import SeerLogo from "./SeerLogo";
import { DataType } from "../redux/reducers/list";

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
  a {
    text-align: center;
    color: ${({ theme }: { theme: { background: string } }) =>
      theme.background};
  }
`;

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid
    ${({ theme }: { theme: { secondary: string } }) => theme.secondary};
  width: 96%;
  padding: 16px;
  margin: 8px;
  div {
    display: flex;
    flex: 1;
    align-items: center;
    &:nth-child(2) {
      justify-content: center;
      @media (max-width: 768px) {
        display: none;
      }
    }
    &:nth-child(3) {
      justify-content: flex-end;
      @media (max-width: 768px) {
        text-align: right;
      }
    }
  }
  img {
    ${size("75px", "75px")}
    margin-right: 16px;
    @media (max-width: 768px) {
      ${size("25px", "25px")}
    }
  }
  h3 {
    color: ${({ theme }: { theme: { background: string } }) =>
      theme.background};
    margin: 0;
  }
`;

const ErrorState = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }: { theme: { background: string } }) => theme.background};
  span {
    margin-bottom: 32px;
  }
  a {
    margin-top: 16px;
    color: ${({ theme }: { theme: { secondary: string } }) => theme.secondary};
  }
`;

export default function Body() {
  const [page] = useState(1);
  const dispatch = useAppDispatch();
  const { loading, data, error } = useAppSelector(
    (state: { list: { loading: boolean; data: [DataType]; error: string } }) =>
      state.list
  );
  useEffect(() => {
    requestCryptoData({
      dispatch,
      url: "/currencies/ticker",
      params: {
        "per-page": 15,
        page,
      },
    });
  }, [page, dispatch]);

  if (loading) {
    return (
      <Wrapper style={{ justifyContent: "center" }}>
        <SeerLogo />
      </Wrapper>
    );
  }

  if (error) {
    return (
      <ErrorState>
        <Icon size={100} icon="error" />
        <code>{error || "There was an error processing your request"}</code>
        <a href="https://nomics.com/">
          Crypto Market Cap & Pricing Data Provided By Nomics
        </a>
      </ErrorState>
    );
  }

  return (
    <Wrapper>
      {data.map(
        ({
          id,
          logo_url,
          rank,
          name,
          currency,
          status,
          price,
          high,
          market_cap,
          max_supply,
          num_exchanges,
        }: DataType) => {
          return (
            <Card key={id}>
              <div>
                <img src={logo_url} alt={`${id} logo`} />
                <code>
                  <h3>Name: {name}</h3>
                  <p>Rank: {rank}</p>
                  <p>Token: {currency}</p>
                </code>
              </div>
              <div>
                <code>
                  <p>Market Cap: {market_cap}</p>
                  <p>Max Supply: {max_supply || "∞"}</p>
                  <p>Listed Exchanges: {num_exchanges}</p>
                </code>
              </div>
              <div>
                <code>
                  <p>Status: {status}</p>
                  <p>Price: ${parseInt(price).toFixed(0)}</p>
                  <p>High: ${parseInt(high).toFixed(0)}</p>
                </code>
              </div>
            </Card>
          );
        }
      )}
      <a href="https://nomics.com/">
        Crypto Market Cap & Pricing Data Provided By Nomics
      </a>
    </Wrapper>
  );
}
