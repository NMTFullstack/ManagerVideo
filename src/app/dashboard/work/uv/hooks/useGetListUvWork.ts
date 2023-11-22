import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQuery } from "react-query";
import { getListUngVienWork } from "../services";
import { DataBlogType } from "../interfaces";
export const useGetBlogTVData = (dataObj: DataBlogType) => {
  const {
    data: dataUvWork,
    isLoading: isLoadingUvWork,
    refetch: refetchUvWork,
  } = useQuery([QUERY_KEYS.LIST_TIN_UV_WORK], () => getListUngVienWork(dataObj), {
    cacheTime: 0,
  });
  return {
    dataUvWork,
    isLoadingUvWork,
    refetchUvWork,
  };
};
