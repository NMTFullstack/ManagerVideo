import { useEffect, useRef, useState } from "react";
import styles from "./title.module.scss";
import { Image } from "antd";
import IMG_animation from "../animation/img";
export default function TitleTdWork247({
    hidden,
    title,
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

    let img = "/img/CV/it/2.jpeg";
    let listJob = ["it", "sale", "nhansu"];
    return (
        <>
            {/* <IMG_animation img1={img} time={2000} /> */}
            {/* <Image src={img} width={360} height={640} preview={false} /> */}
            {titleTitle ? (
                <>
                    {hidden ? (
                        <div className={styles.content}>
                            <div className={styles.title_blog_work247}>
                                {titleState ? (
                                    <p className={styles.p}>{title}</p>
                                ) : (
                                    <></>
                                )}
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
