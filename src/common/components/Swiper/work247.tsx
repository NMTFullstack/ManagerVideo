import { useState, useEffect } from "react";
import TitleWork247 from "../title/blog-work247";
import HeadePhone from "../animation/head-phone";
import { Image } from "antd";
export default function Slider({ item, imgs }: { item: any; imgs: any }) {
    const [showTitle, setShowTitle] = useState(true);
    const [showImg, setShowImg] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowTitle(false);
            setShowImg(true);
        }, 8000);
    }, []);

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
            {showImg && item.img ? (
                <>
                    <Image
                        src={item.img}
                        alt="Banner"
                        preview={false}
                        style={{
                            objectFit: "cover",
                            zIndex: "5",
                        }}
                    />
                    <HeadePhone />
                </>
            ) : showImg && !item.img ? (
                <TitleWork247
                    title={item.title}
                    hidden={true}
                    forwards={true}
                />
            ) : (
                <></>
            )}
        </div>
    );
}
