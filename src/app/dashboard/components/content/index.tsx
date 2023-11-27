"use client";

import { Table, Typography } from "antd";
import { useGetAllListVideo } from "./hooks/useGetListVide";
import ColumnsTableManager from "./table/columns";
import PreviewVideo from "../popup/preview/preview";
import TabManagerYoutube from "../popup/youtube";
import TabManagerDelete from "../popup/delete";

export default function TabManager() {
    const { dataListVideo } = useGetAllListVideo({
        pageSize: 25,
        page: 1,
    });
    return (
        <div>
            <div className="mb-16 text-align-center">
                <Typography.Text>Danh sách</Typography.Text>
            </div>
            <div>
                <Table
                    columns={ColumnsTableManager}
                    dataSource={dataListVideo?.data?.data.map((item: any) => ({
                        ...item,
                        key: item.id,
                    }))}
                    scroll={{
                        x: 1024,
                    }}
                />
            </div>

            <div>
                <PreviewVideo />
                <TabManagerYoutube />
                <TabManagerDelete />
            </div>
        </div>
    );
}
