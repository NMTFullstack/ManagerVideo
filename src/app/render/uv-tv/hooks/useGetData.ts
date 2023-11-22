import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getOneBlogsTv, getAllBlogTv } from "../services";
import { DataTypeAllBlogTv, DataTypeOneBlogTv } from "../interfaces";

export const useGetDataOneBlogTv = (data: DataTypeOneBlogTv) => {
  const {
    data: dataOneBlogTV,
    isLoading: isLoadingGetDataOneBlogTv,
    refetch: refetchGetDataOneBlogTv,
  } = useQuery([QUERY_KEYS.LIST_BLOG_TV], () => getOneBlogsTv(data), {
    cacheTime: 0,
  });
  return {
    dataOneBlogTV,
    isLoadingGetDataOneBlogTv,
    refetchGetDataOneBlogTv,
  };
};
export const useGetDataAllBlogTv = (data: DataTypeAllBlogTv) => {
  const {
    data: dataAllBlogTV,
    isLoading: isLoadingGetDataAllBlogTv,
    refetch: refetchGetDataAllBlogTv,
  } = useQuery([QUERY_KEYS.LIST_BLOG_TV], () => getAllBlogTv(data), {
    cacheTime: 0,
    staleTime: 0,
  });
  return {
    dataAllBlogTV,
    isLoadingGetDataAllBlogTv,
    refetchGetDataAllBlogTv,
  };
};
