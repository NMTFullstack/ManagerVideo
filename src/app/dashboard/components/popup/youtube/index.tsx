"use client";

import { RootState, dispatch, useSelector } from "@/common/redux/store";
import { Modal } from "antd";
import { resetState, setOpenModalPreview } from "../../content.slice";
import { Button, Checkbox, Form, Input } from "antd";
import { useUploadVideoYoutube } from "../../content/hooks/uploadYoutube";
import { toast } from "react-toastify";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { useQueryClient } from "react-query";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";

type FieldType = {
    title?: string;
    des?: string;
    remember?: string;
};

export default function TabManagerYoutube() {
    const { openModalYoutube, id_blog, type, com_name } = useSelector(
        (state: RootState) => state.ContentSilce
    );
    const [loading, setLoading] = useState(false);
    const closeModal = () => {
        dispatch(resetState(false));
    };
    const queryClient = useQueryClient();

    const onFinish = (values: any) => {
        const data = {
            ...values,
            id_blog: id_blog,
            type: type,
            com_name: com_name,
        };
        setLoading(true);
        mutate(data, {
            // onSuccess(data, variables, context) {
            //     dispatch(resetState(false));
            //     toast.success("Up youtube thành công");
            //     queryClient
            //         .getQueryCache()
            //         .findAll([QUERY_KEYS.LIST_VIDEO])
            //         .forEach(({ queryKey }) => {
            //             queryClient.invalidateQueries(queryKey);
            //         });
            // },
        });
        setTimeout(() => {
            toast.success("Up youtube thành công");
            dispatch(resetState(false));
            form.resetFields();
            setLoading(false);
        }, 5000);
    };
    const { mutate, isLoading } = useUploadVideoYoutube();
    const [form] = Form.useForm();
    return (
        <Modal
            title={id_blog}
            open={openModalYoutube}
            onOk={closeModal}
            onCancel={closeModal}
            footer={false}
            width="700px"
        >
            <div className="mt-32">
                <Form
                    name="basic"
                    form={form}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Tiêu đề"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: "Please input your title!",
                            },
                        ]}
                    >
                        <Input size="large" />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Mô tả"
                        name="des"
                        rules={[
                            {
                                required: true,
                                message: "Please input your des!",
                            },
                        ]}
                    >
                        <Input.TextArea
                            style={{
                                minHeight: "200px",
                            }}
                        />
                    </Form.Item>
                    <div className="flex flex-center">
                        <Form.Item>
                            <Button
                                type="primary"
                                loading={loading}
                                htmlType="submit"
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </Modal>
    );
}
