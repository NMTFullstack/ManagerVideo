"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { delay } from "lodash";
import ContentVideoTimViec from "./components/content";
import { handleConvertData } from "./hooks/convertData";
import { DataTypeResult } from "./interfaces";
import { RootState } from "@/common/redux/store";
import axios from "axios";
import axiosClient from "@/common/utils/axios";
import { API_LIST_BLOG_TV } from "@/common/constants/api.constants";

interface VideoOptions {
    listImg: string[];
    title: string;
    totalTime: number;
    listTime: number[];
    listSlices: any;
}

export default function RenderVideo() {
    const pathname = usePathname();
    const isVideoPage = pathname.includes("/render/blog-tv");
    const [isPlay, setIsPlay] = useState(false);
    const audio = useRef<HTMLAudioElement>(null);
    const audioIntro = useRef<HTMLAudioElement>(null);
    const audioOutTro = useRef<HTMLAudioElement>(null);
    const constraints: any = {
        video: true,
        audio: true,
        preferCurrentTab: true,
    };
    const [videoOptions, setVideoOptions] = useState<VideoOptions>({
        title: "",
        totalTime: 0,
        listTime: [],
        listSlices: [],
        listImg: [],
    });
    const [audioSrc, setAudioSrc] = useState<string | undefined>("");

    const { ids } = useSelector((state: RootState) => state.BlogTvSilce);

    useEffect(() => {
        const unFollow = async () => {
            try {
                const stream: any =
                    await navigator.mediaDevices.getDisplayMedia(constraints);
                const mediaRecorder: any = new MediaRecorder(stream, {
                    mimeType: "video/webm; codecs=vp9",
                    videoBitsPerSecond: 3000000,
                    audioBitsPerSecond: 192000,
                });
                if (ids.length > 0) {
                    await recursivelyFetchData(stream, mediaRecorder, 0);
                }
            } catch (error) {
                console.error("Error accessing the screen:", error);
            }
        };
        unFollow();
    }, []);
    const getData = async (news_id: number) => {
        return await axiosClient.post(API_LIST_BLOG_TV, {
            type: 1,
            news_id: news_id,
        });
    };
    const handleBeforePlay = async (data: DataTypeResult) => {
        const dataConvert = await handleConvertData(data);
        let time = 0;
        setVideoOptions((prevOptions) => ({
            ...prevOptions,
            listSlices: dataConvert?.listSlice,
            listTime: dataConvert?.listTime,
            totalTime: dataConvert?.totalTime || 20000,
            title: data?.tieu_de || "Title",
            listImg: data?.news_img || [],
        }));
        time = dataConvert?.totalTime || 20000;
        setAudioSrc(dataConvert?.audio);
        return {
            time: time,
            title: data?.tieu_de,
            des: data?.new_teaser,
        };
    };
    const a = document.createElement("a");
    a.style.display = "none";
    const recursivelyFetchData = async (
        stream: any,
        mediaRecorder: any,
        index: number
    ) => {
        if (index < ids?.length) {
            const currentId: number = ids[index];
            let totalTime = 0;
            const dataOneBlogTV = await getData(currentId);
            const data: DataTypeResult = dataOneBlogTV?.data?.data[0];
            let { time, title, des } = await handleBeforePlay(data);
            totalTime = time;
            if (stream?.active) {
                mediaRecorder.start();
                setIsPlay(true);
                audioIntro.current?.play();
                delay(() => {
                    audio.current?.play();
                }, 12000);
            }

            let recordedChunks: any = [];

            mediaRecorder.ondataavailable = (event: any) => {
                if (event.data.size > 0) {
                    recordedChunks.push(event.data);
                }
            };

            mediaRecorder.onstop = async () => {
                const recordedBlob = new Blob(recordedChunks, {
                    type: "video/webm; codecs=vp9",
                });

                // const url = URL.createObjectURL(recordedBlob);
                // a.href = url;
                // a.download = `work-${currentId}.webm `;
                // a.click();
                const formData = new FormData();
                formData.append("title", String(title));
                formData.append("file", recordedBlob);
                formData.append("des", String(des));
                formData.append("id_blog", String(currentId));
                formData.append("type", "1");
                formData.append("com_name", "timviec365");
                try {
                    const fetcher = async () => {
                        return await axios.post(
                            // "https://api.timviec365.vn/api/qlc/videoai/updateVideo",
                            "http://localhost:8000/api/qlc/videoai/updateVideo",
                            formData
                        );
                    };
                    fetcher();
                } catch (error) {
                    console.error("Error uploading video:", error);
                }
            };
            if (totalTime) {
                setTimeout(() => {
                    mediaRecorder.stop();
                    audio.current?.pause();
                    console.log("stop");
                    setIsPlay(false);
                }, totalTime + 500);

                setTimeout(() => {
                    recursivelyFetchData(stream, mediaRecorder, index + 1);
                }, totalTime + 5000);
            }
        } else {
            if (typeof window !== "undefined") {
                window.close();
            }
        }
    };

    return (
        <>
            {isVideoPage ? (
                <style>{`
        body {
          cursor: none;
        }`}</style>
            ) : null}{" "}
            {isPlay ? (
                <ContentVideoTimViec
                    totalTime={videoOptions.totalTime}
                    title={videoOptions.title}
                    listSlices={videoOptions.listSlices}
                    listTime={videoOptions.listTime}
                    listImgs={videoOptions.listImg}
                />
            ) : (
                <></>
            )}
            <audio ref={audioIntro} src="/video/mp3/introtv.mp3" />
            <audio ref={audio} src={audioSrc} />
            <audio ref={audioOutTro} src="/video/mp3/outtro.mp3" />
        </>
    );
}
