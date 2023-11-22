import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getListUvTimViec } from "../services";
import { DataBlogType } from "../interfaces";
export const useGetListUvTvData = (dataObj: DataBlogType) => {
  const {
    data: dataUvTv,
    isLoading: isLoadingUvTv,
    refetch: refetchUvTv,
  } = useQuery([QUERY_KEYS.LIST_TIN_UV_TV], () => getListUvTimViec(dataObj), {
    cacheTime: 0,
  });
  return {
    dataUvTv,
    isLoadingUvTv,
    refetchUvTv,
  };
};
