import { Image } from "antd";
import { useState, useEffect, useRef } from "react";
import TitleWork247 from "../title/blog-work247";
import HeadePhone from "../animation/head-phone";
import IMG_animation from "../animation/img";
import gsap from "gsap";
import TitleBlogTimViec from "../title/blog-timviec";
export default function SliderTdWork({ item }: { item: any }) {
    const [showTitle, setShowTitle] = useState(true);
    const [showImg, setShowImg] = useState(false);
    const toggle1 = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        setTimeout(() => {
            setShowTitle(false);
            setShowImg(true);
        }, 5000);
    }, []);
    // function cutImageIntoBlocks(
    //     image: HTMLImageElement,
    //     cols: number,
    //     rows: number
    // ): void {
    //     const canvas = canvasRef.current;
    //     const context = canvas?.getContext("2d");

    //     if (context) {
    //         const blockWidth = image.width / cols;
    //         const blockHeight = image.height / rows;

    //         for (let i = 0; i < cols; i++) {
    //             for (let j = 0; j < rows; j++) {
    //                 gsap.to(context, {
    //                     duration: 1,
    //                     delay: i * 0.1 + j * 0.1,
    //                     clipPath: `inset(${j * blockHeight}px ${
    //                         i * blockWidth
    //                     }px ${(rows - j - 1) * blockHeight}px ${
    //                         (cols - i - 1) * blockWidth
    //                     }px)`,
    //                 });
    //             }
    //         }
    //     }
    // }
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        if (videoRef.current && showImg) {
            videoRef.current.play();
        }
    }, [showImg]);
    return (
        <div
            style={{
                width: "854px",
                height: "480px",
            }}
        >
            {showTitle ? (
                <TitleWork247 title={item.title} hidden={true} />
            ) : (
                <></>
            )}
            {showImg ? (
                <>
                    <video
                        autoPlay
                        muted
                        preload="true"
                        loop
                        width="854px"
                        height="482px"
                        ref={videoRef}
                    >
                        <source src="/video/bg/bg-work.mp4" type="video/mp4" />
                    </video>
                </>
            ) : (
                <></>
            )}
        </div>
    );
}
