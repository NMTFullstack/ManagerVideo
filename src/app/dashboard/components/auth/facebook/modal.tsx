import { useUploadTokenFb } from "./useUpload";
import { Button, Image, Input, Modal, Typography } from "antd";
import { toast } from "react-toastify";
import { useState } from "react";
const { Text } = Typography;
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
export default function ModalUpTokenFb({
    open,
    state,
}: {
    open: boolean;
    state: any;
}) {
    const [value, setValue] = useState<string>("");
    const { mutate } = useUploadTokenFb();
    const [type, setType] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        setType(e.target.value);
    };
    const onFinish = () => {
        mutate(
            {
                access_token: value,
                type: type,
            },
            {
                onSuccess(data, variables, context) {
                    toast.success("Post thành công");
                    state(false);
                },
            }
        );
    };
    return (
        <Modal
            open={open}
            onCancel={() => state(false)}
            footer={false}
            wrapClassName="CustomerModal"
        >
            <div className="p-30 flex flex-center flex-align-center">
                <div className="text-align-center">
                    {/* <Image src="/img/why.svg" preview={false} alt="xxx" /> */}
                    <div className="my-24">
                        <Text>Up token face </Text>
                    </div>
                    <div className="my-24">
                        <Radio.Group onChange={onChange} value={type}>
                            <Radio value={1}>Work247</Radio>
                            <Radio value={2}>TimViec365</Radio>
                        </Radio.Group>
                    </div>
                    <div>
                        <Input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    <div className="flex mt-16 flex-center">
                        <div className="max-w-140 w-100 mx-10">
                            <Button
                                block
                                size="large"
                                onClick={() => state(false)}
                            >
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
                                Up
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
