"use client";
import { Button, Tabs } from "antd";

import { CheckOutlined } from "@ant-design/icons";

import YoutubeAuth from "./youtube";
import FacebookAuth from "./facebook/facebook";
import axiosClient from "@/common/utils/axios";
export default function ListAuth() {
    const btnRun = async () => {
        return await axiosClient.post("/api/qlc/videoai/run", {
            com_name: "timviec365",
        });
    };
    const btnRunWork = async () => {
        return await axiosClient.post("/api/qlc/videoai/run", {
            com_name: "work247",
        });
    };
    return (
        <div
            className="flex  mb-16 gap-24"
            style={{
                justifyContent: "center",
            }}
        >
            <div className="w-160px">
                <YoutubeAuth />
            </div>{" "}
            <div className="w-160px ml-24">
                <FacebookAuth />
            </div>{" "}
            <Button onClick={btnRun}>Run TV</Button>{" "}
            <Button onClick={btnRunWork}>Run Work</Button>
        </div>
    );
}
