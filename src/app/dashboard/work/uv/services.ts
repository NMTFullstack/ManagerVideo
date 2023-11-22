import axiosClient from "@/common/utils/axios";
import {  API_LIST_BLOG_WORK } from "@/common/constants/api.constants";
import { DataBlogType } from "./interfaces";

export const getListUngVienWork = (data: DataBlogType) => {
  return axiosClient.post(API_LIST_BLOG_WORK, {
    ...data,
    type:3
  });
};
