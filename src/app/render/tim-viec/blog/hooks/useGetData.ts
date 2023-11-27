import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useMutation, useQuery } from "react-query";
import { getOneBlogsTv, getAllBlogTv } from "../services";
import { DataTypeAllBlogTv, DataTypeOneBlogTv } from "../interfaces";

export const useGetDataOneBlogTv = () => {
    // const {
    //   data: dataOneBlogTV,
    //   isLoading: isLoadingGetDataOneBlogTv,
    //   refetch: refetchGetDataOneBlogTv,
    // } = useQuery([QUERY_KEYS.LIST_BLOG_TV,data.news_id], () => getOneBlogsTv(data), {
    //   cacheTime: 0,
    // });
    // return {
    //   dataOneBlogTV,
    //   isLoadingGetDataOneBlogTv,
    //   refetchGetDataOneBlogTv,
    // };
    const { mutate, isLoading } = useMutation(getOneBlogsTv, {
       
    });
    return { mutate };
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
