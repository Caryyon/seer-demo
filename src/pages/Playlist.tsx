import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://openwhyd.org/hot/electro?format=json";

export default function Playlist() {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function getPlaylist() {
      const data = await axios({
        baseURL: BASE_URL,
      });
      console.log(data);
    }
    getPlaylist();
  }, []);
  return <div>playlist</div>;
}
