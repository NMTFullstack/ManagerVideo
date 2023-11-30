"use client";
import { useEffect, useState } from "react";
import { Image } from "antd";
import { gsap } from "gsap";
export default function Application_2({ title }: { title: string | null }) {
    const [titleState, setTitleState] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setTitleState(true);
    //     }, 100);
    // }, []);
    // useEffect(() => {
    //     console.log(title?.length);
    // }, []);
    let img = "/img/CV/it/2.jpeg";
    // useEffect(() => {
    //     document
    //         .querySelectorAll(".has_animation")
    //         .forEach((element, index) => {
    //             const delay: any = element.getAttribute("data-delay");
    //             setTimeout(() => {
    //                 element.classList.add("animate-in");
    //             }, delay);
    //         });
    // }, []);

    // useEffect(() => {
    //     const wrapper = document.getElementById("wrapper");
    //     const loader = document.getElementById("preloader");
    //     const loader2 = document.getElementById("preloader2");
    //     const loader3 = document.getElementById("preloader3");
    //     const sentence = document.getElementById("annonce");

    //     const tableLoader = [loader, loader2, loader3];

    //     const wrapperWdth = document.body.clientWidth;
    //     const wrapperHeight = document.body.clientHeight;

    //     const tl = gsap.timeline();

    //     gsap.set(wrapper, {
    //         css: {
    //             position: "absolute",
    //             width: "100%",
    //             height: "100%",
    //             backgroundColor: "whitesmoke",
    //             zIndex: "4500",
    //             opacity: "0.9",
    //         },
    //     });

    //     gsap.set(loader, {
    //         css: {
    //             borderTop: "5px solid #c0b688",
    //             width: "150px",
    //             height: "150px",
    //             position: "absolute",
    //             left: "50%",
    //             marginLeft: "-75px",
    //             top: "50%",
    //             marginTop: "-75px",
    //             borderRadius: "50%",
    //             zIndex: "5000",
    //         },
    //     });

    //     gsap.set(loader2, {
    //         css: {
    //             borderTop: "4px solid #a7a8aa",
    //             width: "130px",
    //             height: "130px",
    //             position: "absolute",
    //             left: "50%",
    //             marginLeft: "-65px",
    //             top: "50%",
    //             marginTop: "-65px",
    //             borderRadius: "50%",
    //             zIndex: "5000",
    //         },
    //     });

    //     gsap.set(loader3, {
    //         css: {
    //             borderTop: "3px solid #dfd49d",
    //             width: "110px",
    //             height: "110px",
    //             position: "absolute",
    //             left: "50%",
    //             marginLeft: "-55px",
    //             top: "50%",
    //             marginTop: "-55px",
    //             borderRadius: "50%",
    //             zIndex: "5000",
    //         },
    //     });

    //     gsap.set(sentence, {
    //         css: {
    //             width: "900px",
    //             height: "50px",
    //             position: "absolute",
    //             left: "50%",
    //             marginLeft: "-350px",
    //             top: "50%",
    //             marginTop: "-125px",
    //             zIndex: "5000",
    //             textTransform: "uppercase",
    //             fontSize: "42px",
    //             color: "#c0b688",
    //         },
    //     });

    //     tl.to(
    //         tableLoader,
    //         { duration: 2, rotation: 360, repeat: 1, opacity: 1 },
    //         "here"
    //     )
    //         .staggerFrom(
    //             "#annonce > span",
    //             0.3,
    //             { autoAlpha: 0, rotation: -90 },
    //             0.1
    //         )
    //         .staggerTo([tableLoader, wrapper], 2, { opacity: 0 }, 0.2);
    // }, []);

    return (
        <>
            <div className="animation1">
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
            </div>
            {/* <div id="wrapper">
                <div id="preloader">
                    <div id="preloader2">
                        <div id="preloader3"></div>
                    </div>
                </div>
                <div id="annonce">{title} </div>
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
            {/* <div className="Application_1">
                <Image
                    className="img_1"
                    src={img}
                    width={360}
                    height={640}
                    preview={false}
                />
                <div className="title">{title}</div>
            </div> */}
        </>
    );
}
