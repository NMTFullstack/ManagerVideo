"use client";
import { useEffect, useRef, useState } from "react";
import { Image } from "antd";
export default function JobDescription_1({ title }: { title: string | null }) {
  let img = "/img/CV/it/2.jpeg";

  const spanizeRef: any = useRef(null);

  useEffect(() => {
    const spanizeLetters = {
      init: function () {
        console.log("run");
        this.bindEvents();
      },
      bindEvents: function () {
        const letters = spanizeRef.current.textContent
          .trim()
          .replace(/\./g, "")
          .split("");
        spanizeRef.current.innerHTML =
          "<span >" + letters.join("</span><span>") + "</span>";
      },
    };

    if (title) {
      spanizeLetters.init();
    }
  }, [title]);
  console.log(title);
  return (
    <div className="job-description_1">
      <div className=" mast">
        <p className="mast__text js-spanize" ref={spanizeRef}>
          {title}
        </p>
      </div>
    </div>
  );
}
