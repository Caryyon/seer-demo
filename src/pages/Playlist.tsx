import { useState, useEffect } from "react";
import styled from "styled-components";
import { Card, Spinner } from "@blueprintjs/core";
import axios from "axios";

const BASE_URL = "https://openwhyd.org/hot?format=json";

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
  width: 100%;
  color: ${({ theme }) => theme.primary};
  p {
    margin-top: 8px;
  }
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  height: 95%;
  width: 100%;
`;
const SongCard = styled(Card)`
  padding: 0;
  box-sizing: border-box;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  margin: 8px;
  color: ${({ theme }) => theme.primary};
  small {
    color: ${({ theme }) => theme.background};
  }
  h3 {
    margin: 0;
  }
  img {
    margin: 8px;
    height: auto;
    width: 128px;
  }
  div {
    text-align: right;
    padding: 8px;
  }
`;

export default function Playlist() {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function getPlaylist() {
      const { data } = await axios({
        baseURL: `https://cors-anywhere.herokuapp.com/${BASE_URL}`,
      });
      setList(data.tracks);
    }
    getPlaylist();
  }, []);
  if (list.length === 0) {
    return (
      <Loading>
        <div>
          <Spinner />
          <p>Hold on while we get the playlist</p>
        </div>
      </Loading>
    );
  }
  return (
    <Wrapper>
      {list.map(({ _id, name, img, score, prev }) => {
        return (
          <SongCard key={_id} interactive>
            <img src={img} alt={name} />
            <div>
              <div>
                <h3>
                  <small>Song Name: </small>
                  {name}
                </h3>
              </div>
              <div>
                <p>
                  <small>Score: </small>
                  {score}
                </p>
                <p>
                  <small>Prev Score: </small>
                  {prev ? prev : "none"}
                </p>
              </div>
            </div>
          </SongCard>
        );
      })}
    </Wrapper>
  );
}
