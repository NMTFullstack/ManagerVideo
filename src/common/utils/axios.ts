import axios from "axios";
// config

import { store } from "../redux/store";
import {
  BASE_URL_API,
  accessTokenExpiredStatusCode,
  accessTokenNotValidCode,
  unAuthorizedStatusCode,
} from "../constants/config.constant";
import { HOST_API } from "@/common/config";
import { API_REFRESH_TOKEN } from "../constants/api.constants";

import { getCookie } from "./getValueFromCookie";
import { PATH_AUTH } from "../constants/path.constants";
import { setPopupLogin } from "@/app/layoutApp/login.slice";

// ----------------------------------------------------------------------
const currentLang = getCookie("NEXT_LOCALE");
const appId = getCookie("APP_ID");
const axiosClient = axios.create({
  baseURL: HOST_API,
  headers: {
    "Content-Type": "application/json",
    Accept: "Application/json",
    common: {
      app_code: appId,
      lang: currentLang,
    },
  },
});



axiosClient.interceptors.response.use(
  (response) => response.data,
  
);
axiosClient.interceptors.request.use(async (config) => {

 
  return {
    ...config,
  };
});
export default axiosClient;
