"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { delay } from "lodash";
import ContentVideoTimViec from "./components/content";
import { useGetDataOneBlogWork } from "./hooks/useGetData";
import { handleConvertData } from "./hooks/convertData";
import { DataTypeUploadBlog, DataTypeResult } from "./interfaces";
import { RootState } from "@/common/redux/store";
import { updateDataBlogWork } from "./services";

interface VideoOptions {
    listImg: string[];
    title: string;
    totalTime: number;
    listTime: number[];
    listSlices: any;
}

export default function RenderVideo() {
    const pathname = usePathname();
    const isVideoPage = pathname.includes("/render/blog-work");
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

    const { ids } = useSelector((state: RootState) => state.BlogWorkSilce);

    const [id, setId] = useState(ids[0]);
    const { dataOneBlogWork, refetchGetDataOneBlogWork } =
        useGetDataOneBlogWork({
            id: id,
        });

    useEffect(() => {
        const unFollow = async () => {
            try {
                const stream = await navigator.mediaDevices.getDisplayMedia(
                    constraints
                );
                const mediaRecorder = new MediaRecorder(stream, {
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
        if (dataOneBlogWork) {
            unFollow();
        }
    }, [dataOneBlogWork]);
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
        return time;
    };
    const recursivelyFetchData = async (
        stream: any,
        mediaRecorder: any,
        index: number
    ) => {
        if (index < ids?.length) {
            const currentId: number = ids[index];
            setId(currentId);
            let totalTime = 0;
            if (index === 0) {
                const data: DataTypeResult = dataOneBlogWork?.data?.news[0];
                totalTime = await handleBeforePlay(data);
            } else {
                await refetchGetDataOneBlogWork();
                delay(async () => {
                    const data: DataTypeResult = dataOneBlogWork?.data?.news[0];
                    totalTime = await handleBeforePlay(data);
                }, 2000);
            }
            if (stream.active && totalTime > 0) {
                console.log("start playing");
                setIsPlay(true);
                mediaRecorder.start();
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
                const formData = new FormData();
                formData.append("title", videoOptions.title);
                formData.append("file", recordedBlob);
                formData.append("des", `Mô tả : ${videoOptions.title}`);
                formData.append("id_blog", String(currentId));
                formData.append("type", "1");
                formData.append("com_name", "timviec365");
                updateDataBlogWork(formData);
            };
            if (totalTime > 0) {
                setTimeout(() => {
                    mediaRecorder.stop();
                    audio.current?.pause();
                    console.log("stop");
                    setIsPlay(false);
                }, totalTime + 500);

                setTimeout(() => {
                    recursivelyFetchData(stream, mediaRecorder, index + 1);
                }, totalTime + 3000);
            }
        } else {
            window.close();
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
            {isPlay && videoOptions.totalTime > 0 ? (
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
            <audio ref={audioIntro} src="/video/mp3/Introwork247.mp3" />
            <audio ref={audio} src={audioSrc} />
            <audio ref={audioOutTro} src="/video/mp3/outtro.mp3" />
        </>
    );
}
