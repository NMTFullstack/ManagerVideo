import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getListTinTuyenDungTimViec } from "../services";
import { DataBlogType } from "../interfaces";
export const useGetListTdTvData = (dataObj: DataBlogType) => {
  const {
    data: dataTuyenDungTv,
    isLoading: isLoadingTdTv,
    refetch: refetchTdTv,
  } = useQuery([QUERY_KEYS.LIST_TIN_TD_TV], () => getListTinTuyenDungTimViec(dataObj), {
    cacheTime: 0,
  });
  return {
    dataTuyenDungTv,
    isLoadingTdTv,
    refetchTdTv,
  };
};
