import { useEffect, useRef, useState } from "react";
import styles from "./title.module.scss";
import { Image } from "antd";
import IMG_animation from "../../../../../../common/components/animation/img";
export default function TitleTdWork247({
    hidden,
    title,
}: {
    hidden: boolean;
    title: string;
    forwards?: boolean;
}) {
    const [titleState, setTitleState] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTitleState(true);
        }, 1700);
    }, []);

    let img = "/img/CV/it/2.jpeg";
    return (
        <>
            {hidden ? (
                <div className={styles.content}>
                    <Image
                        className={styles.img}
                        src={img}
                        width={360}
                        height={640}
                        preview={false}
                    />

                    <div className={styles.title}>
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
    );
}
