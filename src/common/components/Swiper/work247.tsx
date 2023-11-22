import { useState, useEffect, useRef } from "react";
import TitleWork247 from "../Title/blog-work247";
import HeadePhone from "../Animation/head-phone";
import IMG_animation from "../Animation/img";
import { Image } from "antd";
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

  return (
    <div
      style={{
        width: "854px",
        height: "480px",
      }}
    >
      {showTitle ? <TitleWork247 title={item.title} hidden={true} /> : <></>}
      {showImg && item.img ? (
        <>
          {/* <IMG_animation img1={item.img} img2={item.img} time={0} /> */}
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
      ) : showImg && !item.img ? (
        <TitleWork247 title={item.title} hidden={true} forwards={true} />
      ) : (
        <></>
      )}
    </div>
  );
}
