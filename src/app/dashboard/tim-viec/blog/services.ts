import axiosClient from "@/common/utils/axios";
import { API_LIST_BLOG_TV } from "@/common/constants/api.constants";
import { DataBlogType } from "./interfaces";

export const getListBlogTimViec = (data: DataBlogType) => {
  return axiosClient.post(API_LIST_BLOG_TV, {
    type:1,
    ...data
  });
};
