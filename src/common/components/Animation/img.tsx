import { Button } from "antd";
import gsap, { Power1 } from "gsap";
import React, { useEffect, useRef } from "react";

interface Settings {
    cols: number;
    rows: number;
}

interface State {
    pos: number;
}

const IMG_animation = ({
    img1,
    time = 2000,
}: {
    img1: string;
    time: number;
}) => {
    const settings: Settings = {
        cols: 20,
        rows: 20,
    };
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const toggle1 = useRef<HTMLImageElement | null>(null);
    const toggle2 = useRef<HTMLImageElement | null>(null);
    const newcanvasRef = useRef<HTMLCanvasElement>(
        document.createElement("canvas")
    );
    const state: State = { pos: 0 };
    const tl = gsap.timeline();
    function clamp(min: number, mid: number, max: number): number {
        return mid < min ? min : mid < max ? mid : max;
    }

    function setCanvasSize(
        canvas: HTMLCanvasElement,
        image: HTMLImageElement
    ): void {
        if (canvas && image) {
            if (canvas && image) {
                canvas.width = 360;
                canvas.height = 640;
                canvas.style.width = `${360}px`;
                canvas.style.height = `${640}px`;
            }
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const newcanvas = newcanvasRef.current;
        const context = canvas?.getContext("2d");
        const newcontext = newcanvas.getContext("2d");
        if (canvas && context && newcanvas && newcontext) {
            contextRef.current = context;
            setCanvasSize(canvas, toggle1.current as HTMLImageElement);
            setCanvasSize(newcanvas, toggle1.current as HTMLImageElement);
        }
    }, []);

    function RenderTempCanvas(): void {
        const newcanvas = newcanvasRef.current;
        const newcontext = newcanvas.getContext("2d");
        if (newcontext) {
            newcontext.clearRect(0, 0, 360, 640);
            newcontext.drawImage(
                toggle2.current as HTMLImageElement,
                0,
                0,
                960,
                520
            );
            const xw = 360 / settings.cols;
            const xh = 640 / settings.rows;

            for (let i = 0; i <= settings.cols; i++) {
                for (let j = 0; j <= settings.rows; j++) {
                    const delay = (j * i) / (settings.cols * settings.rows);

                    newcontext.clearRect(
                        i * xw,
                        j * xh,
                        xw * clamp(state.pos - delay, 0, 1),
                        xh * clamp(state.pos - delay, 0, 1)
                    );
                }
            }
        } else {
            console.warn("Can not");
        }
    }

    function render(imageT: HTMLImageElement | null): void {
        const context = contextRef.current;
        if (context && imageT) {
            context.clearRect(0, 0, 360, 640);
            context.drawImage(imageT, 0, 0);
            RenderTempCanvas();
            context.drawImage(newcanvasRef.current, 0, 0);
        }
    }

    function draw(): void {
        render(toggle1.current);
        window.requestAnimationFrame(draw);
    }

    useEffect(() => {
        draw();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            Toggle();
        }, 2000);
    }, [Toggle, time]);
    function Toggle(): void {
        if (state.pos === 2) {
            tl.to(state, { duration: 2, pos: 0, ease: "power1.out" });
        } else {
            tl.to(state, { duration: 2, pos: 2, ease: "power1.out" });
        }
    }

    return (
        <div>
            <div
                style={{
                    width: "360px",
                    height: "640px",
                }}
            >
                <canvas
                    ref={canvasRef}
                    id="canvas"
                    width="360px"
                    height="640px"
                ></canvas>
            </div>

            <div className="images">
                <img
                    width={360}
                    height={640}
                    id="image1"
                    ref={toggle1}
                    src={img1}
                    alt=""
                />
                <img
                    width={360}
                    height={640}
                    id="image2"
                    ref={toggle2}
                    className="active"
                    src={img1}
                    alt=""
                />
            </div>
        </div>
    );
};

export default IMG_animation;
