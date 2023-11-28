"use client";
import { Button, Tabs } from "antd";

import { CheckOutlined } from "@ant-design/icons";

import YoutubeAuth from "./youtube";
import FacebookAuth from "./facebook/facebook";
export default function ListAuth() {
    return (
        <div className="flex flex-space-between mb-16 gap-24">
            <div className="w-160px">
                <YoutubeAuth />
            </div>{" "}
            <div className="w-160px">
                <FacebookAuth />
            </div>{" "}
            <div className="w-160px">
                <Button type="primary" block>
                    Login Tiktok <CheckOutlined />
                </Button>
            </div>
        </div>
    );
}
