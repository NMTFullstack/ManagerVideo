"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./content.module.scss";
import TitleBlogTimViec from "@/common/components/Title/blog-timviec";
import IntroTimViec from "@/common/components/intro/intro-tv";
import SliderBlogTV from "@/common/components/Swiper/blog-timviecc";
import OutTroWork247 from "@/common/components/outtro/outtro";
export default function ContentVideoTimViec({
  totalTime,
  title,
  listSlices,
  listTime,
  listImgs,
}: {
  totalTime: number;
  title: string;
  listSlices: any;
  listTime: any;
  listImgs: any;
}) {
  const [hiddenInTro, setHiddenInTro] = useState(true);
  const [hiddenOutTro, setHiddenOutTro] = useState(false);
  const [hiddenTitle, setHiddenTitle] = useState(false);
  const [step2, setStep2] = useState(false);
  const [sliderState, setSliderState] = useState<boolean[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setHiddenInTro(false);
      setHiddenTitle(true);
    }, 8000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setHiddenOutTro(true);
      setStep2(false);
    }, totalTime - 7000);
  }, []);
  useEffect(() => {
    if (listSlices?.length > 0) {
      setTimeout(() => {
        setHiddenTitle(false);
        doTasksAtTimeIntervals(listTime);
        setStep2(true);
      }, listTime[0]);
    }
  }, [listSlices]);

  let arr: boolean[] = [];

  useEffect(() => {
    if (listSlices?.length > 0) {
      setSliderState(new Array(listSlices.length).fill(false));
      arr = new Array(listSlices.length).fill(false);
    }
  }, []);
  if (listSlices?.length > 0) {
    arr = new Array(listSlices.length).fill(false);
  }
  function doTasksAtTimeIntervals(timeIntervals: number[]): void {
    console.log("actions");
    function executeTaskAtIndex(index: number): void {
      if (index < timeIntervals.length) {
        arr[index] = true;
        setSliderState([...arr]);
        arr = new Array(listSlices.length).fill(false);
        setTimeout(() => {
          executeTaskAtIndex(index + 1);
        }, timeIntervals[index + 1] - timeIntervals[index]);
      }
    }

    executeTaskAtIndex(0);
  }
  console.log(listSlices);
  return (
    <>
      <div className={styles.content}>
        {hiddenInTro ? <IntroTimViec hidden={hiddenInTro} /> : <></>}
        {hiddenTitle ? (
          <TitleBlogTimViec
            hidden={hiddenTitle}
            title={title}
            forwards={true}
          />
        ) : (
          <></>
        )}
        <>
          {step2 && (
            <>
              {listSlices?.map((item: any, index: number) => (
                <>
                  {sliderState[index] ? (
                    <div
                      style={{
                        width: "854px",
                        height: "480px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      key={index}
                    >
                      <SliderBlogTV item={item} imgs={listImgs[index + 1]} />
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ))}
            </>
          )}
        </>

        {hiddenOutTro ? <OutTroWork247 hidden={hiddenOutTro} /> : <></>}
      </div>
    </>
  );
}
