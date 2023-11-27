"use client";

import { RootState, dispatch, useSelector } from "@/common/redux/store";
import { resetState } from "../../content.slice";
import { useDeleteVideoYoutube } from "../../content/hooks/useDelete";
import { Button, Image, Modal, Typography } from "antd";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";

import { toast } from "react-toastify";
const { Text } = Typography;
export default function TabManagerDelete() {
    const { openModalDelete, id_blog, type, com_name } = useSelector(
        (state: RootState) => state.ContentSilce
    );
    const { mutate } = useDeleteVideoYoutube();

    const closeModal = () => {
        dispatch(resetState(false));
    };
    const queryClient = useQueryClient();

    const onFinish = () => {
        mutate(
            {
                id_blog: id_blog,
                type: type,
                com_name: com_name,
            },
            {
                onSuccess(data, variables, context) {
                    toast.success("Xoá thành công");
                    dispatch(resetState(false));
                    queryClient
                        .getQueryCache()
                        .findAll([QUERY_KEYS.LIST_VIDEO])
                        .forEach(({ queryKey }) => {
                            queryClient.invalidateQueries(queryKey);
                        });
                },
            }
        );
    };

    return (
        <Modal
            open={openModalDelete}
            onOk={closeModal}
            onCancel={closeModal}
            footer={false}
            wrapClassName="CustomerModal"
        >
            <div className="p-30 flex flex-center flex-align-center">
                <div className="text-align-center">
                    <Image src="/img/why.svg" preview={false} alt="xxx" />
                    <div className="my-24">
                        <Text>
                            Bạn muốn xóa tài khoản video:{id_blog} này ?
                        </Text>
                    </div>
                    <div className="flex mt-16 flex-center">
                        <div className="max-w-140 w-100 mx-10">
                            <Button block size="large" onClick={closeModal}>
                                Huỷ
                            </Button>
                        </div>
                        <div className="max-w-140 w-100 mx-10">
                            <Button
                                style={{
                                    backgroundColor: "#FF7A00",
                                    color: "#fff",
                                }}
                                block
                                size="large"
                                onClick={onFinish}
                            >
                                Xoá
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
