"use client";

import { RootState, dispatch, useSelector } from "@/common/redux/store";
import { Modal } from "antd";
import { resetState, setOpenModalPreview } from "../../content.slice";
import { Button, Checkbox, Form, Input } from "antd";
import { useUploadVideoYoutube } from "../../content/hooks/uploadYoutube";

type FieldType = {
  title?: string;
  des?: string;
  remember?: string;
};

export default function TabManagerYoutube() {
  const { openModalYoutube, id_blog, type, com_name } = useSelector(
    (state: RootState) => state.ContentSilce
  );

  const closeModal = () => {
    dispatch(resetState(false));
  };
  const onFinish = (values: any) => {
    const data = {
      ...values,
      id_blog: id_blog,
      type: type,
      com_name: com_name,
    };
    console.log(data);

    mutate(data);
  };
  const { mutate } = useUploadVideoYoutube();
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
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
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Tiêu đề"
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Mô tả"
            name="des"
            rules={[{ required: true, message: "Please input your des!" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <div className="flex flex-center">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </Modal>
  );
}
