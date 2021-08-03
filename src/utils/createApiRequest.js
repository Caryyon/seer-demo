import axios from "axios";

// sets the default baseURL so i don't have to in the options
axios.defaults.baseURL = "https://dashboard.nbshare.io/api/v1";

async function createApiRequest(options: object) {
  try {
    // get jwt token from localStorage
    const token: string = localStorage.getItem("jwt") || null;
    // pass down the params to the function
    const res = await axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: endpoint,
      method: type,
      data: options,
    });
    return res;
  } catch (e) {
    // handle this with a logger as well as a more meaning full
    // erro message but... ya know time constraints.
    console.error(e);
  }
}
