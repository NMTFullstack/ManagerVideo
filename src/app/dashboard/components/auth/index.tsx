"use client";
import { Button, Tabs } from "antd";

import { CheckOutlined } from "@ant-design/icons";

import YoutubeAuth from "./youtube";
import FacebookAuth from "./facebook/facebook";
export default function ListAuth() {
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
        </div>
    );
}
