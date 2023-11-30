"use client";
import { Image } from "antd";
export default function Application_1({ title }: { title: string | null }) {
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
            <div className="Application_1">
                <Image
                    className="img_1"
                    src={img[Math.floor(Math.random() * 10) + 1]}
                    width={360}
                    height={640}
                    preview={false}
                />
                <div className="title">
                    Hồ sơ bao gồm:
                    {title}
                </div>
            </div>
        </>
    );
}
