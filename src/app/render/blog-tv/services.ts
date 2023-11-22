import axiosClient from "@/common/utils/axios";
import {
    API_LIST_BLOG_TV,
    UPLOAD_DATA,
} from "@/common/constants/api.constants";
import {
    DataTypeOneBlogTv,
    DataTypeAllBlogTv,
} from "./interfaces";

export const getAllBlogTv = (data: DataTypeAllBlogTv) => {
    return axiosClient.post(API_LIST_BLOG_TV, data);
};

export const getOneBlogsTv = (data: DataTypeOneBlogTv) => {
    return axiosClient.post(API_LIST_BLOG_TV, {
        type: 1,
        ...data,
    });
};
export const updateDataBlogTv = (data: any) => {
    return axiosClient.post(UPLOAD_DATA, data);
};
