import axios from "axios";
// config

import { HOST_API } from "@/common/config";
import { getCookie } from "./getValueFromCookie";

// ----------------------------------------------------------------------
const currentLang = getCookie("NEXT_LOCALE");
const appId = getCookie("APP_ID");
const axiosClient = axios.create({
  baseURL: HOST_API,
  timeout:300000,
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
