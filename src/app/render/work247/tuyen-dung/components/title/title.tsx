import { useEffect, useRef, useState } from "react";
import styles from "./title.module.scss";
import { Image, Typography } from "antd";
export default function TitleTdWork247({
    title,
    logo,
}: {
    title: string | undefined;
    logo?: string;
}) {
    const [titleState, setTitleState] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTitleState(true);
        }, 1700);
    }, []);

    let img = "/img/CV/it/2.jpeg";
    let date = new Date();
    let mounth = date.getMonth() + 1;
    return (
        <div className={styles.title_1}>
            <div className={styles.content}>
                <div className={styles.img_wrap}>
                    <a href="#core">
                        {logo ? (
                            <Image src={logo} preview={false} />
                        ) : (
                            <Image src={logo} preview={false} />
                        )}
                    </a>
                </div>

                <div className="mt-36 text-align-center ">
                    {titleState ? (
                        <p className={styles.title}>
                            Tin tuyển dụng tháng {mounth}
                        </p>
                    ) : (
                        <></>
                    )}
                    {titleState ? <p className={styles.p}>{title}</p> : <></>}
                </div>
            </div>
        </div>
    );
}
