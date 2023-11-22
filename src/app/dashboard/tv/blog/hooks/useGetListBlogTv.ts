import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getListBlogTimViec } from "../services";
import { DataBlogType } from "../interfaces";
export const useGetBlogTVData = (dataObj: DataBlogType) => {
  const {
    data: dataBlogTv,
    isLoading: isLoadingBlogTv,
    refetch: refetchBlogTv,
  } = useQuery([QUERY_KEYS.LIST_BLOG_TV], () => getListBlogTimViec(dataObj), {
    cacheTime: 0,
  });
  return {
    dataBlogTv,
    isLoadingBlogTv,
    refetchBlogTv,
  };
};
