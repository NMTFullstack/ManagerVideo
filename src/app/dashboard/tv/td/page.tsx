"use client";
import { Button, Table, Typography } from "antd";
import { useGetListTdTvData } from "./hooks/useGetListTdTv";
import type { ColumnsType } from "antd/es/table";
import { dispatch } from "@/common/redux/store";
import { setListIdsValue } from "./uv-tv.slice";

interface DataType {
  new_id: string;
  news_link: string;
  status: number;
}
export default function TdTimViec() {
  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "new_id",
      key: "1",
      width: 40,
    },
    {
      title: "Tiêu đề tin ",
      dataIndex: "tieu_de",
      key: "2",
      align: "center",
      width: 180,
      render: (data) => {
        return <div>{data}</div>;
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
          <div>{data === 1 ? <p>Đã có video</p> : <>Chưa có video</>}</div>
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
                  dispatch(setListIdsValue([data.new_id]));
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
        "/render/td-tv",
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
  const { dataTuyenDungTv } = useGetListTdTvData({
    page: 1,
    pageSize: 20,
  });
  return (
    <div>
      <div>
        <Button
          onClick={() => {
            // let ids = dataTuyenDungTv?.data?.data.filter(
            //     (item: DataType) => item.status === 0
            // );
            // let id = ids.map((item: DataType) => item.new_id);
            let ids = dataTuyenDungTv?.data.data.map(
              (item: DataType) => item.new_id
            );
            dispatch(setListIdsValue(ids));
            exportVideo();
          }}
        >
          Render All Video
        </Button>
      </div>
      <div className="my-16  gap-16">
        <div className="text-align-center">
          <Typography.Text>Danh sách tin tuyển dụng</Typography.Text>
        </div>
        <Table
          columns={columns}
          dataSource={dataTuyenDungTv?.data.data.map((item: DataType) => ({
            ...item,
            key: item.new_id,
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
