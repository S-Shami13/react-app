import axios, { CanceledError, AxiosInstance }  from "axios";

function createApiClient(baseURL: string) {
  return axios.create({
    baseURL,
  });
}

export default createApiClient;
export type { CanceledError, AxiosInstance };