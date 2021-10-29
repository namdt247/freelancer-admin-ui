import axios from "axios";
import queryString from "query-string";
import ModelManager from "../common/ModelManager";
import {BASE_URL} from "./ApiConfig";

const AxiosConfig = () => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ModelManager.token}`,
    },
    timeout: 60000,
    paramsSerializer: (params) => queryString.stringify(params),
  });
};

export default AxiosConfig;
