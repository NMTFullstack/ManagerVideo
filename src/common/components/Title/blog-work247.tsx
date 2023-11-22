import { useEffect, useRef, useState } from "react";
import styles from "./title.module.scss";
export default function TitleWork247({
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
                                width="100%"
                                height="100%"
                                className={styles.video}
                                ref={videoRef}
                            >
                                <source
                                    src="/video/title/title_work_247.mp4"
                                    type="video/mp4"
                                />
                            </video>
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
