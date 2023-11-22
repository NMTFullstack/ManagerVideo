import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getListBlogWork } from "../services";
import { DataBlogType } from "../interfaces";
export const useGetBlogWorkData = (dataObj: DataBlogType) => {
  const {
    data: dataBlogWork,
    isLoading: isLoadingBlogWork,
    refetch: refetchBlogWork,
  } = useQuery([QUERY_KEYS.LIST_BLOG_WORK], () => getListBlogWork(dataObj), {
    cacheTime: 0,
  });
  return {
    dataBlogWork,
    isLoadingBlogWork,
    refetchBlogWork,
  };
};
