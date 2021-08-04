import axios from "axios";
//import { getPosts } from "../redux/reducers/wallstreetbets";
// sets the default baseURL so i don't have to in the options
axios.defaults.baseURL = "https://dashboard.nbshare.io/api/v1";

function AppThunk(dispatch) {
  console.log("dispatch", dispatch);
  console.log("AppThunk");
}

export default async function createApiRequest(options) {
  try {
    console.log("options", options);
    // get jwt token from localStorage
    const token: string = localStorage.getItem("jwt") || null;
    // pass down the params to the function
    const res = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: options.url,
      method: options.method || "get",
      data: options.data,
    });
    console.log("res", res);
    return AppThunk();
  } catch (e) {
    // handle this with a logger as well as a more meaning full
    // erro message but... ya know time constraints.
    console.error(e);
  }
}
