"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./ScaleUp.module.scss";
import parse from "html-react-parser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ScaleUp({ children }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      wrapperRef.current,
      {
        autoAlpha: 0,
        scale: 0.99,
      },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: wrapperRef.current,
          toggleActions: "play reset play reset",
        },
      }
    );
  }, []);

  return (
    <div className={styles["wrapper"]} ref={wrapperRef}>
      {children}
    </div>
  );
}
