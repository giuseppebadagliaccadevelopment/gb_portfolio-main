"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./Hero.module.scss";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero({ data }) {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const nameRef = useRef(null);
  const copyRef = useRef(null);
  const copyTwoRef = useRef(null);
  const btnsRef = useRef(null);

  const { imgPath, btnText, btnLink, btnTextTwo, btnLinkTwo, withExtra } = data;
  useEffect(() => {
    gsap.to(wrapperRef.current, {
      autoAlpha: 1,
      duration: 0.5,
      delay: 0.1,
    });
    const tl = gsap.timeline();

    tl.fromTo(imgRef.current, { autoAlpha: 0, x: -10 }, { autoAlpha: 1, x: 0 });
    tl.fromTo(
      nameRef.current,
      { autoAlpha: 0, x: -10 },
      { autoAlpha: 1, x: 0 }
    );
    tl.fromTo(
      copyRef.current,
      { autoAlpha: 0, x: -10 },
      { autoAlpha: 1, x: 0 }
    );
    //outside timeline
    gsap.fromTo(
      copyTwoRef.current,
      { autoAlpha: 0, x: -10 },
      { autoAlpha: 1, x: 0, delay: 1 }
    );
    gsap.fromTo(
      btnsRef.current,
      { autoAlpha: 0, x: -10 },
      { autoAlpha: 1, x: 0, delay: 1 }
    );
  }, []);

  return (
    <div className={styles["wrapper"]} ref={wrapperRef}>
      <div className={`${styles["inner-wrap"]} inner-wrap`}>
        <div className={`inner-wrap ${styles["top"]}`}>
          <div className={styles["headshot"]} ref={imgRef}>
            <Image src={imgPath} alt={""} fill />
          </div>
          <h1 ref={nameRef}>giuseppe Badagliacca</h1>
        </div>
        <div className={`inner-wrap ${styles["bottom"]}`} ref={copyRef}>
          <div className={styles["bottom-border"]}></div>
          <p>
            Giuseppe Badagliacca is a Senior Software Engineer with a strong
            focus on front-end development and a deep passion for creating
            innovative projects while continuously learning new technologies. He
            thrives on taking ownership of his work from start to finish,
            ensuring both functionality and scalable&nbsp;solutions.
          </p>
        </div>
        {!withExtra && (
          <div className={styles["flex-btns"]} ref={btnsRef}>
            <Link
              href={btnLink}
              className={`${styles["btn"]} ${
                withExtra ? styles.marginTop : ""
              }`}
            >
              <p>{parse(btnText)}</p>
            </Link>
            <a
              href={btnLinkTwo}
              className={`${styles["btn"]} ${
                withExtra ? styles.marginTop : ""
              }`}
            >
              <p>{parse(btnTextTwo)}</p>
            </a>
          </div>
        )}
      </div>
      {withExtra && (
        <div className={`${styles["inner-wrap"]} inner-wrap`}>
          <div className={styles["bottom"]} ref={copyTwoRef}>
            <p>
              Outside of coding, Giuseppe enjoys playing the guitar, practicing
              the Sicilian language, and staying active through regular
              workouts. His multifaceted interests reflect his curiosity and
              commitment to&nbsp;self-improvement.
              <br /> <br />
              Giuseppe made a successful career switch from mental health work
              to software development, reaching senior status within two years
              at New World Group. A company specializing in branding and
              marketing for motion pictures and luxury real estate. During his
              tenure, he has built websites for high-profile clients, including
              Fiat Automobiles and luxury real estate companies in the Greater
              New&nbsp;York&nbsp;City&nbsp;area.
              <br /> <br />
              Giuseppe&apos;s full-stack skillset and eagerness to learn enable
              him to grow across all areas of development. As a native New
              Yorker with a positive, can-do attitude, he embraces challenges
              and is constantly seeking opportunities for growth in the
              ever-evolving tech&nbsp;landscape.
              <br />
              <br />
              Feel free to reach out with any&nbsp;questions!
            </p>
          </div>
          <Link
            href={btnLink}
            className={`${styles["btn"]} ${withExtra ? styles.marginTop : ""}`}
          >
            <p>{parse(btnText)}</p>
          </Link>
        </div>
      )}
    </div>
  );
}
