import { Image } from "antd";
import { useState, useEffect, useRef } from "react";
import TitleWork247 from "../Title/blog-work247";
import HeadePhone from "../Animation/head-phone";
import IMG_animation from "../Animation/img";
import gsap from "gsap";
import TitleBlogTimViec from "../Title/blog-timviec";
export default function Slider({ item, imgs }: { item: any; imgs: any }) {
    const [showTitle, setShowTitle] = useState(true);
    const [showImg, setShowImg] = useState(false);
    const toggle1 = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        setTimeout(() => {
            setShowTitle(false);
            setShowImg(true);
        }, 8000);
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

    return (
        <div>
            {showTitle ? (
                <TitleBlogTimViec title={item.title} hidden={true} />
            ) : (
                <></>
            )}
            {showImg ? (
                <>
                    {item.img ? (
                        <>
                            {/* <IMG_animation
                                img1={item.img}
                                img2={imgs}
                                time={0}
                            /> */}
                            <Image
                                src={item.img}
                                alt="Banner"
                                preview={false}
                                style={{
                                    // width: "100%",
                                    objectFit: "cover",
                                    zIndex: "5",
                                }}
                            />
                            <HeadePhone />
                        </>
                    ) : (
                        <TitleBlogTimViec
                            title={item.title}
                            hidden={true}
                            forwards={true}
                        />
                    )}
                </>
            ) : (
                <></>
            )}
        </div>
    );
}
