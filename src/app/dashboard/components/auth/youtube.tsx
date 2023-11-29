"use client";

import { Button } from "antd";
import { useEffect, useState } from "react";
import axiosClient from "@/common/utils/axios";

export default function YoutubeAuth() {
    const [getTokenTV, setGetTokenTV] = useState("");
    const [getTokenWork, setGetTokenWork] = useState("");

    useEffect(() => {
        const unFollow = async () => {
            const fetcher = async () => {
                return await axiosClient.post(
                    "/api/qlc/videoai/getTokenYoutube",
                    {
                        com_name: "timviec365",
                    }
                );
            };
            const data = await fetcher();
            setGetTokenTV(data.data.url);
        };
        unFollow();
    }, []);
    useEffect(() => {
        const unFollow = async () => {
            const fetcher = async () => {
                return await axiosClient.post(
                    "/api/qlc/videoai/getTokenYoutube",
                    {
                        com_name: "work247",
                    }
                );
            };
            const data = await fetcher();
            setGetTokenWork(data.data.url);
        };
        unFollow();
    }, []);
    const login = (url: string | null) => {
        let windowWidth = 964;
        let windowHeight = 560;

        let windowLeft = (window.screen.width - windowWidth) / 2;
        let windowTop = (window.screen.height - windowHeight) / 2;
        window.open(
            `${url}`,
            "_blank",
            "width=" +
                windowWidth +
                ", height=" +
                windowHeight +
                ", left=" +
                windowLeft +
                ", top=" +
                windowTop
        );
    };
    return (
        <div className="text-align-center">
            <div className="my-20">
                <h3>Youtube</h3>
            </div>
            <div className="my-20 w-140px">
                <Button size="large" block onClick={() => login(getTokenTV)}>
                    Timviec
                </Button>
            </div>
            <div className="my-20 w-140px" onClick={() => login(getTokenWork)}>
                <Button size="large" block>
                    Work
                </Button>
            </div>
        </div>
    );
}
