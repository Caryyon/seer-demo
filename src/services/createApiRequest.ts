import axios from "axios";
import { Dispatch } from "redux";
import { req, res, err } from "../redux/reducers/list";

// setting defaults
axios.defaults.baseURL = "https://api.nomics.com/v1";
// would come from localStorage
axios.defaults.params = {
  key: "92ea800cb44c02ae424198cf401b301e06a116bc",
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
