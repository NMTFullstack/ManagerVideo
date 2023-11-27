import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getOneBlogsWork, getAllBlogWork } from "../services";
import { DataTypeAllBlogTv, DataTypeOneBlogTv } from "../interfaces";

export const useGetDataOneBlogWork = (data: DataTypeOneBlogTv) => {
  const {
    data: dataOneBlogWork,
    isLoading: isLoadingGetDataOneBlogWork,
    refetch: refetchGetDataOneBlogWork,
  } = useQuery([QUERY_KEYS.LIST_BLOG_TV], () => getOneBlogsWork(data), {
    cacheTime: 0,
  });
  return {
    dataOneBlogWork,
    isLoadingGetDataOneBlogWork,
    refetchGetDataOneBlogWork,
  };
};
export const useGetDataAllBlogWork = (data: DataTypeAllBlogTv) => {
  const {
    data: dataAllBlogTV,
    isLoading: isLoadingGetDataAllBlogTv,
    refetch: refetchGetDataAllBlogTv,
  } = useQuery([QUERY_KEYS.LIST_BLOG_TV], () => getAllBlogWork(data), {
    cacheTime: 0,
    staleTime: 0,
  });
  return {
    dataAllBlogTV,
    isLoadingGetDataAllBlogTv,
    refetchGetDataAllBlogTv,
  };
};
