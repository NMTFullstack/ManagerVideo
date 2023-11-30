"use client";
import { Button, Table, Typography } from "antd";
import { useGetBlogWorkData } from "./hooks/useGetListBlogTv";
import Link from "next/link";
import type { ColumnsType } from "antd/es/table";
import { dispatch } from "@/common/redux/store";
import { setListIdsValue } from "./blog-work.slice";
import { PATH_RENDER } from "@/common/constants/path.constants";
import { useState } from "react";

interface DataType {
    news_id: string;
    news_link: string;
    status: number;
}
export default function TabsBlogWork() {
    const columns: ColumnsType<DataType> = [
        {
            title: "ID",
            dataIndex: "news_id",
            key: "1",
            width: 40,
        },
        {
            title: "Link",
            dataIndex: "news_link",
            key: "2",
            align: "center",
            width: 180,
            render: (data) => {
                return (
                    <Link href={data} target="_blank">
                        {data}
                    </Link>
                );
            },
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "2",
            width: 180,
            align: "center",
            render: (data) => {
                return (
                    <div>
                        {data === 1 ? <p>Đã có video</p> : <>Chưa có video</>}
                    </div>
                );
            },
        },
        {
            title: "Actions",
            dataIndex: "",
            key: "3",
            width: 40,
            align: "center",
            render: (data) => {
                return (
                    <div>
                        {data.status ? (
                            <></>
                        ) : (
                            <Button
                                onClick={() => {
                                    dispatch(setListIdsValue([data.news_id]));

                                    console.log(data.news_id);

                                    exportVideo();
                                }}
                            >
                                Xuat Video
                            </Button>
                        )}
                    </div>
                );
            },
        },
    ];

    const exportVideo = () => {
        if (typeof window !== "undefined") {
            let windowWidth = 854;
            let windowHeight = 528;
            window.open(
                PATH_RENDER.BLOG_WORK247,
                "_blank",
                "width=" +
                    windowWidth +
                    ", height=" +
                    windowHeight +
                    ", left=" +
                    0 +
                    ", top=" +
                    0
            );
        }
    };
    const { dataBlogWork } = useGetBlogWorkData({
        type: 1,
        page: 1,
    });
    const [current, setCurrent] = useState(1);
    return (
        <div>
            <div>
                <Button
                    onClick={() => {
                        let ids = dataBlogWork?.data?.news.filter(
                            (item: DataType) => item.status === 0
                        );
                        let id = ids.map((item: DataType) => item.news_id);
                        dispatch(setListIdsValue(id));
                        exportVideo();
                    }}
                >
                    Xuat ALL Video
                </Button>
            </div>
            <div className="my-16  gap-16">
                <div className="text-align-center">
                    <Typography.Text>Danh sách blog work247</Typography.Text>
                </div>
                <Table
                    columns={columns}
                    dataSource={dataBlogWork?.data?.news.map(
                        (item: DataType) => ({
                            ...item,
                            key: item.news_id,
                        })
                    )}
                    bordered={false}
                    pagination={{
                        pageSize: 100,
                        current: current,
                        onChange: (page) => {
                            console.log(page);
                            // Gọi hàm khi chuyển trang
                            // Làm một yêu cầu mới để lấy dữ liệu với trang mới
                            // Ví dụ: gọi useGetBlogWorkData với page là page
                        },
                        // total: dataBlogWork?.data?.total,
                    }}
                />
            </div>
        </div>
    );
}
