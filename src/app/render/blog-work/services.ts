import axiosClient from "@/common/utils/axios";
import {
  API_LIST_BLOG_WORK,
  UPLOAD_DATA,
} from "@/common/constants/api.constants";
import {
  DataTypeOneBlogTv,
  DataTypeAllBlogTv,
  DataTypeUploadBlog,
} from "./interfaces";

export const getAllBlogWork = (data: DataTypeAllBlogTv) => {
  return axiosClient.post(API_LIST_BLOG_WORK, {
    type:1,...data
  });
};

export const getOneBlogsWork = (data: DataTypeOneBlogTv) => {
  return axiosClient.post(API_LIST_BLOG_WORK, {
    type:1,...data
  });
};
export const updateDataBlogWork = (data: any) => {
  return axiosClient.post(UPLOAD_DATA, data);
};
