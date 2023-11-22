"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./title.module.scss";
export default function TitleBlogTimViec({
  hidden,
  title,
  forwards,
}: {
  hidden: boolean;
  title: string;
  forwards?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [titleState, setTitleState] = useState(false);
  const [titleTitle, setTitleTitle] = useState(true);
  useEffect(() => {
    if (hidden && videoRef.current) {
      videoRef.current.play();
    }
  }, [hidden]);
  useEffect(() => {
    setTimeout(() => {
      setTitleState(true);
    }, 1700);
  }, []);
  useEffect(() => {
    if (!forwards) {
      setTimeout(() => {
        setTitleTitle(false);
      }, 8000);
    }
  }, []);
  return (
    <>
      {titleTitle ? (
        <>
          {hidden ? (
            <div className={styles.content}>
              <video
                autoPlay
                muted
                width={854}
                height={482}
                className={styles.video}
                ref={videoRef}
              >
                <source src="/video/title/title_blog_tv.mp4" type="video/mp4" />
              </video>
              <div className={styles.title_blog_timviec}>
                {titleState ? <p className={styles.p}>{title}</p> : <></>}
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
