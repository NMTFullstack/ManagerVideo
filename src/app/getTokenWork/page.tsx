"use client";

import axiosClient from "@/common/utils/axios";

import { useEffect } from "react";

export default function GetTokenWork(request: any) {
    useEffect(() => {
        const unFollow = async () => {
            const searchParams = request?.searchParams?.code;
            if (searchParams) {
                const fetcher = async () => {
                    return await axiosClient.post(
                        "/api/qlc/videoai/updateTokenYoutube",
                        {
                            code: searchParams,
                            com_name: "work247",
                        }
                    );
                };
                await fetcher();
                setTimeout(() => {
                    window.close();
                }, 1000);
            }
        };
        unFollow();
    }, []);
    return <div>hihii</div>;
}
