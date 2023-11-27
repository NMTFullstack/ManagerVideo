"use client";
import { useEffect, useState } from "react";
import { Image } from "antd";
export default function Deadline({ title }: { title: string | null }) {
    const [titleState, setTitleState] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTitleState(true);
        }, 1700);
    }, []);

    let img = "/img/CV/it/2.jpeg";
    useEffect(() => {
        document
            .querySelectorAll(".has_animation")
            .forEach((element, index) => {
                const delay: any = element.getAttribute("data-delay");
                setTimeout(() => {
                    element.classList.add("animate-in");
                }, delay);
            });
    }, []);
    return (
        <>
            {/* <div className="animation1">
                <Image
                    className="img"
                    src={img}
                    width={360}
                    height={640}
                    preview={false}
                />

                <div className="title">
                    {titleState ? <p className="p">{title}</p> : <></>}
                </div>
            </div> */}
            {/* Luong  */}
            {/* <div className="animation2">
                <div className="has_animation animation_ltr" data-delay="1000">
                    <p className={styles.bigger}>{title}</p>
                </div>
                <div className="has_animation animation_rtl" data-delay="2000">
                    <Image src={img} width={360} height={360} preview={false} />
                </div>
            </div> */}
            {/* <div className="animation3">
                <div className="ani_3_img mt-40 mb-30">
                    <Image src={img} width={360} height={360} preview={false} />
                </div>
                <div className="ani_3_title">
                    <span> {title}</span>
                    <span> {title}:</span>
                    <span> {title}</span>
                </div>
            </div> */}
        </>
    );
}
