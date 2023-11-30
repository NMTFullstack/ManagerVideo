"use client";
import { useEffect, useState } from "react";
import { Image } from "antd";
export default function Contact_1({ title }: { title: string | null }) {
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
            <div className="animation2">
                <div className="has_animation animation_ltr" data-delay="1000">
                    <p className="bigger">{title}</p>
                </div>
                <div className="has_animation animation_rtl" data-delay="2000">
                    <Image
                        src={img[Math.floor(Math.random() * 10) + 1]}
                        width={360}
                        height={360}
                        preview={false}
                    />
                </div>
            </div>
        </>
    );
}
