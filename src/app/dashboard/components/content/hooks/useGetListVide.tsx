import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getAllListVideo } from "../service";
import { ListVideoType } from "../interface";

export const useGetAllListVideo = (data: ListVideoType) => {
    const {
        data: dataListVideo,
        isLoading: isLoadingGetAllListVideo,
        refetch: refetchGetAllListVideo,
    } = useQuery([QUERY_KEYS.LIST_VIDEO], () => getAllListVideo(data), {
        cacheTime: 0,
    });
    return {
        dataListVideo,
        isLoadingGetAllListVideo,
        refetchGetAllListVideo,
    };
};
