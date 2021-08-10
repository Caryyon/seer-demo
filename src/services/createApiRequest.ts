import axios from "axios";

// setting defaults
axios.defaults.baseURL = "https://openwhyd.org/hot";
axios.defaults.params = { format: "json" };

export default async function createApiRequest(options: object) {
  try {
    const data = await axios({ ...options });
    console.log(data);
    return () => {
      console.log("createApiRequest");
    };
  } catch (e) {
    console.error(e);
  }
}
