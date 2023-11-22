import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getListTdWork } from "../services";
import { DataBlogType } from "../interfaces";
export const useGetBlogTVData = (dataObj: DataBlogType) => {
  const {
    data: dataTdWork,
    isLoading: isLoadingTdWork,
    refetch: refetchTdWork,
  } = useQuery([QUERY_KEYS.LIST_TIN_TD_WORK], () => getListTdWork(dataObj), {
    cacheTime: 0,
  });
  return {
    dataTdWork,
    isLoadingTdWork,
    refetchTdWork,
  };
};
