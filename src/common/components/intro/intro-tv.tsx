"use client";
import { useEffect, useRef } from "react";

export default function IntroTimViec({ hidden }: { hidden: boolean }) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (hidden && videoRef.current) {
            videoRef.current.play();
        }
    }, [hidden]);
    return (
        <>
            {hidden ? (
                <video width="100%" height="100%" autoPlay muted ref={videoRef}>
                    <source
                        src="/video/intro/IntroTimViec.mp4"
                        type="video/mp4"
                    />
                </video>
            ) : (
                <></>
            )}
        </>
    );
}
