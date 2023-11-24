import { useMutation } from "react-query";
import { uploadYoutube } from "../service";

export const useUploadVideoYoutube = () => {
  const { mutate, isLoading } = useMutation(uploadYoutube);
  return { mutate, isLoading };
};
