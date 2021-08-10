import { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "@blueprintjs/core";
import axios from "axios";

const BASE_URL = "https://openwhyd.org/hot/electro?format=json";

const Wrapper = styled.div`
  box-sizing: border-box;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  height: 95%;
  width: 100%;
`;
const SongCard = styled(Card)`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.secondary};
  margin: 8px;
  color: ${({ theme }) => theme.primary};
  img {
    height: 100px;
    width: auto;
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
  console.log(list);
  if (list.length === 0) {
    return <div>loading...</div>;
  }
  return (
    <Wrapper>
      {list.map(({ _id, name, img, score, prev }) => {
        return (
          <SongCard key={_id} interactive>
            <img src={img} alt={name} />
            <div>
              <div>
                <h4>
                  <small>Song Name: </small>
                  {name}
                </h4>
              </div>
              <div>
                <p>
                  <small>Score: </small>
                  {score}
                </p>
                <p>
                  <small>Prev Score: </small>
                  {prev}
                </p>
              </div>
            </div>
          </SongCard>
        );
      })}
    </Wrapper>
  );
}
