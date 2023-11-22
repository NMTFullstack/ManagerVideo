import { useMutation } from "react-query";
import { uploadYoutube } from "../service";
import { UploadYoutubeType } from "../interface";

export const useUploadVideoYoutube = (dataSubmit: UploadYoutubeType) => {
    const { mutate, isLoading } = useMutation(uploadYoutube, {
        onSuccess: (data) => {
            if (!data) return;
            console.log(data);
        },
    });
    // mutate(dataSubmit, {
    //     onSuccess: () => {
    //         console.log("success");
    //     },
    //     onError: (error: any) => {
    //         console.log(error?.message);
    //     },
    // });
    // return null;
};
