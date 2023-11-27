"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { delay } from "lodash";
import ContentVideoTimViec from "./components/content";
import { useGetDataAllBlogTv, useGetDataOneBlogTv } from "./hooks/useGetData";
import { handleConvertData } from "./hooks/convertData";
import { DataTypeUploadBlog, DataTypeResult } from "./interfaces";
import { RootState } from "@/common/redux/store";
import { updateDataBlogTv } from "./services";

interface VideoOptions {
    listImg: string[];
    title: string;
    totalTime: number;
    listTime: number[];
    listSlices: any;
}

export default function RenderVideo() {
    const pathname = usePathname();
    const isVideoPage = pathname.includes("/video");
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

    const [id, setId] = useState(ids[0]);
    const { dataOneBlogTV, refetchGetDataOneBlogTv } = useGetDataOneBlogTv({
        news_id: id,
        type: 1,
    });

    useEffect(() => {
        if (id) {
            refetchGetDataOneBlogTv();
        }
    }, [id, refetchGetDataOneBlogTv]);

    useEffect(() => {
        const unFollow = async () => {
            const data: DataTypeResult = dataOneBlogTV?.data?.data[0];
            if (data && data?.tieu_de && data?.news_img) {
                const dataConvert = await handleConvertData(data);
                setVideoOptions((prevOptions) => ({
                    ...prevOptions,
                    listSlices: dataConvert?.listSlice,
                    listTime: dataConvert?.listTime,
                    totalTime: dataConvert?.totalTime || 20000,
                    title: data?.tieu_de || "Title",
                    listImg: data?.news_img || [],
                }));
                setAudioSrc(dataConvert?.audio);
            }
        };
        unFollow();
    }, [dataOneBlogTV]);

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
        unFollow();
    }, [ids]);

    const recursivelyFetchData = async (
        stream: any,
        mediaRecorder: any,
        index: number
    ) => {
        if (index < ids?.length) {
            const currentId: number = ids[index];
            console.log(currentId);
            setId(currentId);
            await refetchGetDataOneBlogTv();
            let recordedChunks: any = [];
            if (stream.active && videoOptions.totalTime > 0) {
                delay(() => {
                    mediaRecorder.start();
                    audioIntro.current?.play();
                }, 1000);
                delay(() => {
                    setIsPlay(true);
                }, 500);
            }
            delay(() => {
                audio.current?.play();
            }, 12000);

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
                updateDataBlogTv(formData);
            };
            if (videoOptions.totalTime) {
                setTimeout(() => {
                    mediaRecorder.stop();
                    audio.current?.pause();
                    console.log("stop");
                    setIsPlay(false);
                }, videoOptions.totalTime + 500);

                setTimeout(() => {
                    recursivelyFetchData(stream, mediaRecorder, index + 1);
                }, videoOptions.totalTime + 3000);
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
