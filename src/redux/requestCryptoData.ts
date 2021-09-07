import createApiRequest from "../services/createApiRequest";
// @ts-ignore
export const requestCryptoData = (options) =>
  createApiRequest({ ...options })(options.dispatch);
