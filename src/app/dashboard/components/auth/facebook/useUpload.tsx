import { UPLOAD_TOKEN_FB } from "@/common/constants/api.constants";
import axiosClient from "@/common/utils/axios";
import { useMutation } from "react-query";

interface DataType {
    access_token: string;
    type: number;
}

export const uploadYoutube = async (data: DataType) => {
    return await axiosClient.post(UPLOAD_TOKEN_FB, data);
};

export const useUploadTokenFb = () => {
    const { mutate, isLoading } = useMutation(uploadYoutube);
    return { mutate, isLoading };
};
