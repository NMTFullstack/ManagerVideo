import axiosClient from "@/common/utils/axios";
import {
    GET_LIST_VIDEO,
    UPLOAD_YOUTUBE,DELETE_VIDEO
} from "@/common/constants/api.constants";
import {
    ListVideoType,
    UploadYoutubeType,
    DeleteDataType
} from "./interface";

export const getAllListVideo = (data: ListVideoType) => {
    return axiosClient.post(GET_LIST_VIDEO, data);
};

export const uploadYoutube =async (data: UploadYoutubeType) => {
    return await axiosClient.post(UPLOAD_YOUTUBE, data)
}
export const deleteVideo =async (data: DeleteDataType) => {
    return await axiosClient.post(DELETE_VIDEO, data)
}