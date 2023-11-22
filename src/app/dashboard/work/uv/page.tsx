"use client";
import { Button, Table, Typography } from "antd";
import { useGetBlogTVData } from "./hooks/useGetListUvWork";
import Link from "next/link";
import type { ColumnsType } from "antd/es/table";
import { dispatch } from "@/common/redux/store";
import { setListIdsValue } from "./uv-tv.slice";

interface DataType {
    use_id: string;
    news_link: string;
    status: number;
}
export default function TabsUvWork() {
    const columns: ColumnsType<DataType> = [
        {
            title: "ID",
            dataIndex: "use_id",
            key: "1",
            width: 40,
        },
        {
            title: "Họ tên",
            dataIndex: "user_name",
            key: "2",
            align: "center",
            width: 180,
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
                                    dispatch(setListIdsValue(data.use_id));
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

            let windowLeft = (window.screen.width - windowWidth) / 2;
            let windowTop = (window.screen.height - windowHeight) / 2;
            window.open(
                "/render/uv-work",
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
    const { dataUvWork } = useGetBlogTVData({
        page: 1,
    });
    return (
        <div>
            <div>
                <Button
                    onClick={() => {
                        // let ids = dataUvWork?.data?.news.filter(
                        //     (item: DataType) => item.status === 0
                        // );
                        // let id = ids.map((item: DataType) => item.use_id);
                        // dispatch(setListIdsValue(id));
                        dispatch(
                            setListIdsValue(
                                dataUvWork?.data?.news.map(
                                    (item: DataType) => item.use_id
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
                    dataSource={dataUvWork?.data.news.map((item: DataType) => ({
                        ...item,
                        key: item.use_id,
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
