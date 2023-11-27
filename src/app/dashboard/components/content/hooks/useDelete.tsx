import { useMutation } from "react-query";
import { deleteVideo } from "../service";

export const useDeleteVideoYoutube = () => {
    const { mutate, isLoading } = useMutation(deleteVideo, {});
    return { mutate, isLoading };
};
