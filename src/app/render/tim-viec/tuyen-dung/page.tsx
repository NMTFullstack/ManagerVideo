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
import axiosClient from "@/common/utils/axios";
import { API_LIST_BLOG_TV } from "@/common/constants/api.constants";
import axios from "axios";

interface VideoOptions {
  listImg: string[];
  title: string;
  totalTime: number;
  listTime: number[];
  listSlices: any;
  com_logo?: string;
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

  const { ids } = useSelector((state: RootState) => state.TuyenDungTvSilce);

  const getData = async (news_id: number) => {
    return await axiosClient.post(API_LIST_BLOG_TV, {
      type: 2,
      news_id: news_id,
    });
  };
  const [textNew, setTextNew] = useState("");

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
      logo: data.com_logo,
    }));
    time = dataConvert?.totalTime || 20000;
    setAudioSrc(dataConvert?.audio);
    return {
      time: time,
      title: data?.tieu_de,
    };
  };
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
      const dataOneTdTV = await getData(currentId);
      const data: DataTypeResult = dataOneTdTV?.data?.data[0];
      console.log(data);
      let totalTime = 0;
      let { time, title } = await handleBeforePlay(data);
      totalTime = time;
      console.log(totalTime);
      let recordedChunks: any = [];
      if (stream.active) {
        mediaRecorder.start();
        setIsPlay(true);
        audioIntro.current?.play();
        delay(() => {
          audio.current?.play();
        }, 8000);
      }

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
        formData.append("title", String(title));
        formData.append("file", recordedBlob);
        formData.append("des", `Mô tả : ${videoOptions.title}`);
        formData.append("id_blog", String(currentId));
        formData.append("type", "2");
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
      setTimeout(() => {
        mediaRecorder.stop();
        audio.current?.pause();
        console.log("stop");
        setIsPlay(false);
      }, totalTime + 500);

      setTimeout(() => {
        recursivelyFetchData(stream, mediaRecorder, index + 1);
      }, totalTime + 3000);
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
          videoOptions={videoOptions}
          textNew={textNew}
          logo={videoOptions.com_logo}
          title={videoOptions.title}
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
