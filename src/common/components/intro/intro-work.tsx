"use client";
import { useEffect, useRef } from "react";

export default function IntroWork247({ hidden }: { hidden: boolean }) {
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
                        src="/video/intro/IntroWork247.mp4"
                        type="video/mp4"
                    />
                </video>
            ) : (
                <></>
            )}
        </>
    );
}
