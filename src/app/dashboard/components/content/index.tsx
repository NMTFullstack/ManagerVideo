"use client";

import { Table, Typography } from "antd";
import { useGetAllListVideo } from "./hooks/useGetListVide";
import ColumnsTableManager from "./table/columns";
import PreviewVideo from "../popup/preview/preview";
import TabManagerYoutube from "../popup/youtube";

export default function TabManager() {
  const { dataListVideo } = useGetAllListVideo({
    pageSize: 25,
    page: 1,
  });
  return (
    <div>
      <div className="mb-16">
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
      </div>
    </div>
  );
}
