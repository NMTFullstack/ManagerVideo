import axiosClient from "@/common/utils/axios";
import {
    GET_LIST_VIDEO,
    UPLOAD_YOUTUBE
} from "@/common/constants/api.constants";
import {
    ListVideoType,
    UploadYoutubeType
} from "./interface";

export const getAllListVideo = (data: ListVideoType) => {
    return axiosClient.post(GET_LIST_VIDEO, data);
};

export const uploadYoutube =async (data: UploadYoutubeType) => {
    return await axiosClient.post(UPLOAD_YOUTUBE, data)
}