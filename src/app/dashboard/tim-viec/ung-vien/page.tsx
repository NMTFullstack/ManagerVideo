"use client";
import { Button, Table, Typography } from "antd";
import { useGetListUvTvData } from "./hooks/useGetListBlogTv";
import Link from "next/link";
import type { ColumnsType } from "antd/es/table";
import { dispatch } from "@/common/redux/store";
import { setListIdsValue } from "./uv-tv.slice";
import { PATH_RENDER } from "@/common/constants/path.constants";

interface DataType {
    news_id: string;
    news_link: string;
    status: number;
}
export default function TabsUngVienTV() {
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
                                    dispatch(setListIdsValue(data.news_id));
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
            let windowWidth = 360;
            let windowHeight = 642;
            window.open(
                PATH_RENDER.UV_TIM_VIEC,
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
    const { dataUvTv, isLoadingUvTv } = useGetListUvTvData({
        page: 1,
        pageSize: 20,
    });
    return (
        <div>
            <div>
                <Button
                    onClick={() => {
                        dispatch(
                            setListIdsValue(
                                dataUvTv?.data?.data.map(
                                    (item: DataType) => item.news_id
                                )
                            )
                        );
                        exportVideo();
                    }}
                >
                    Xuat ALL Video
                </Button>
            </div>
            <div className="my-16  gap-16">
                <div className="text-align-center">
                    <Typography.Text>Danh sách ứng viên</Typography.Text>
                </div>
                <Table
                    columns={columns}
                    dataSource={dataUvTv?.data.data.map((item: DataType) => ({
                        ...item,
                        key: item.news_id,
                    }))}
                    bordered={false}
                    pagination={{
                        pageSize: 20,
                        onChange: (e) => {
                            console.log(e);
                        },
                        total: 10,
                    }}
                />
            </div>
        </div>
    );
}
