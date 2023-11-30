"use client";
import { useEffect, useState } from "react";
import { Image } from "antd";
export default function Deadline({ title }: { title: string | null }) {
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
            <div className="animation3">
                <div className="ani_3_img mt-40 mb-30">
                    <Image
                        src={img[Math.floor(Math.random() * 10) + 1]}
                        width={360}
                        height={360}
                        preview={false}
                    />
                </div>
                <div className="ani_3_title">
                    <span
                        style={{
                            textAlign: "center",
                            fontSize: "24px",
                            marginBottom: "20px",
                        }}
                    >
                        Hạn nộp hồ sơ :
                    </span>
                    <span> {title}</span>
                </div>
            </div>
        </>
    );
}
