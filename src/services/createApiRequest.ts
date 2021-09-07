import axios from "axios";
import { Dispatch } from "redux";
import { req, res, err } from "../redux/reducers/list";

// setting defaults
axios.defaults.baseURL = "https://api.nomics.com/v1";
axios.defaults.headers = {
  "Access-Control-Allow-Origin": "https://seer-demo.vercel.app/*",
};

export default function createApiRequest(options: object) {
  return function (dispatch: Dispatch) {
    //sets loading screen
    dispatch(req());
    return axios({ ...options }).then(
      ({ data }: { data: object[] }) => dispatch(res(data)),
      (error: string) => dispatch(err(error))
    );
  };
}
