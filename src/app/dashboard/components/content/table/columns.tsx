"use client";
import type { ColumnsType } from "antd/es/table";
import { DataTableManagerFbType } from "../interface";
import { Button } from "antd";
import { dispatch } from "@/common/redux/store";
import {
    setIdBlog,
    setLinkVideo,
    setOpenModalPreview,
} from "../../content.slice";
import { useUploadVideoYoutube } from "../hooks/uploadYoutube";

const ColumnsTableFb: ColumnsType<DataTableManagerFbType> = [
    {
        title: "com_name",
        dataIndex: "com_name",
        key: "com_name",
    },
    {
        title: "id",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "id_blog",
        dataIndex: "id_blog",
        key: "id_blog",
    },
    {
        title: "id_youtube",
        dataIndex: "id_youtube",
        key: "id_youtube",
        render: (data) => {
            return <div>{data ? <div>{data}</div> : <p>Chưa có</p>}</div>;
        },
    },
    {
        title: "link_youtube",
        dataIndex: "link_youtube",
        key: "link_youtube",
        render: (data) => {
            return (
                <div>
                    {!data ? (
                        <p>Bạn cần đẩy video này lên youtube </p>
                    ) : (
                        <div>{data}</div>
                    )}
                </div>
            );
        },
    },
    {
        title: "link_server",
        dataIndex: "link_server",
        key: "link_server",
        render: (data) => {
            return (
                <div>
                    {data ? (
                        <div>{data}</div>
                    ) : (
                        <p>Video đã được xoá khỏi server</p>
                    )}
                </div>
            );
        },
    },
    {
        title: "Xem trước",
        dataIndex: "",
        key: "review",
        render: (data) => {
            return (
                <div>
                    <Button
                        onClick={() => {
                            dispatch(setOpenModalPreview(true));
                            dispatch(setIdBlog(data.id_blog));
                            dispatch(
                                setLinkVideo(
                                    data.id_youtube
                                        ? data.id_youtube
                                        : data.link_server
                                )
                            );
                        }}
                    >
                        {" "}
                        Xem trước
                    </Button>
                </div>
            );
        },
    },
    {
        title: "Đăng youtube",
        dataIndex: "",
        key: "youtube",
        render: (data) => {
            let dataSubmit = {
                id_blog: data.id_blog,
                type: data.type,
                com_name: data.com_name,
                title: "Test upload",
                description: "description",
            };

            return (
                <div>
                    {data.status_server === 1 ? (
                        <p>Đã đăng </p>
                    ) : (
                        <Button
                            onClick={() => useUploadVideoYoutube(dataSubmit)}
                        >
                            Đăng video
                        </Button>
                    )}
                </div>
            );
        },
    },
    {
        title: "Đăng facebook",
        dataIndex: "",
        key: "facebook",
        render: (data) => {
            let dataSubmit = {
                id_blog: data.id_blog,
                type: data.type,
                com_name: data.com_name,
                title: "Test upload",
                description: "description",
            };

            return (
                <div>
                    {data.status_server === 1 ? (
                        <p>Đã đăng </p>
                    ) : (
                        <Button
                            onClick={() => useUploadVideoYoutube(dataSubmit)}
                        >
                            Đăng video
                        </Button>
                    )}
                </div>
            );
        },
    },
    {
        title: "Đăng instagram",
        dataIndex: "",
        key: "instagram",
    },
    {
        title: "Đăng twitter",
        dataIndex: "",
        key: "twitter",
    },
    {
        title: "Đăng tiktok",
        dataIndex: "",
        key: "tiktok",
    },
];
export default ColumnsTableFb;
