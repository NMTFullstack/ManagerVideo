"use client";
import { useEffect, useState } from "react";
import { Image } from "antd";
export default function Recruitment_1({ title }: { title: string | null }) {
    const [titleState, setTitleState] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTitleState(true);
        }, 1700);
    }, []);

    let img = [
        "/img/1.jpg",
        "/img/2.jpg",
        "/img/3.jpg",
        "/img/4.jpg",
        "/img/5.jpg",
        "/img/6.jpg",
        "/img/7.jpg",
        "/img/8.jpg",
        "/img/9.jpg",
        "/img/10.jpg",
    ];
    return (
        <>
            <div className="animation1">
                <Image
                    className="img"
                    src={img[Math.floor(Math.random() * 10) + 1]}
                    width={360}
                    height={640}
                    preview={false}
                />

                <div className="title">
                    {titleState ? <p className="p">{title}</p> : <></>}
                </div>
            </div>
        </>
    );
}
