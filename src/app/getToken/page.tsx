"use client";

import axios from "axios";
import { type NextRequest } from "next/server";
import { useEffect } from "react";

export default function GetToken(request: any) {
    useEffect(() => {
        const unFollow = async () => {
            const searchParams = request?.searchParams?.code;
            if (searchParams) {
                const fetcher = async () => {
                    return await axios.post(
                        "http://localhost:8000/api/qlc/videoai/updateTokenYoutube",
                        {
                            token: searchParams,
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
