import { Image } from "antd";
import { useState, useEffect, useRef } from "react";
import HeadePhone from "../Animation/head-phone";
import IMG_animation from "../Animation/img";
import styles from "./swiper.module.scss";
import TitleBlogTimViec from "../Title/blog-timviec";
export default function SliderBlogTV({ item, imgs }: { item: any; imgs: any }) {
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
        <TitleBlogTimViec title={item.title} hidden={true} />
      ) : (
        <></>
      )}
      {showImg && item.img ? (
        <div className="flex flex-align-center flex-center">
          {/* <IMG_animation img1={item.img} img2={item.img} time={0} /> */}
          <Image
            src={item.img}
            alt="Banner"
            className={`${styles.images} ${showImg ? styles.imageAppear : ""}`}
            preview={false}
            style={{
              // width: "100%",
              objectFit: "cover",
              zIndex: "5",
            }}
          />
          <HeadePhone />
        </div>
      ) : showImg && !item.img ? (
        <TitleBlogTimViec title={item.title} hidden={true} forwards={true} />
      ) : (
        <></>
      )}
    </div>
  );
}
