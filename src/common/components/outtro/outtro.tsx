"use client";
import { useEffect, useRef } from "react";
import styles from "./outtro.module.scss";
import _ from "lodash";
export default function OutTroWork247({ hidden }: { hidden: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (hidden && videoRef.current) {
      videoRef.current.play();
    }
  }, [hidden]);

  return (
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
            <source src="/video/outtro/outtro.mp4" type="video/mp4" />
          </video>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
