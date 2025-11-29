//'use client'
//import React, { useEffect, useState, useRef } from 'react';
import styles from "./Footer.module.scss";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Footer({}) {
  return (
    <div className={styles["wrapper"]}>
      <div className={`${styles["inner-wrap"]} inner-wrap`}>
        <div className={styles["sec-one"]}>
          <div className={styles["sec-one-flex"]}>
            <a href="tel:631.926.1023">
              <p>T: 631.926.1023</p>
            </a>
            <a href="mailto:joebadagliacca@gmail.com">
              <p>E: joebadagliacca@gmail.com</p>
            </a>
          </div>
          <div className={styles["sec-one-flex"]}>
            <p className={styles["removeOnTab"]}>New York, New York</p>
            <div className={styles["buttonflex"]}>
              <a
                href="https://www.linkedin.com/in/giuseppebadagliacca/"
                target="_blank"
              >
                <div className={styles["linkedin-wrap"]}>
                  <Image
                    src={"/icons/linkedin.svg"}
                    alt={"LinkedIn Link"}
                    fill
                  />
                </div>
              </a>
              <Link href={"/contact"} className={styles["removeOnTab"]}>
                <div className={styles["contact-wrap"]}>
                  <Image
                    src={"/icons/email_icon.svg"}
                    alt={"Contact Link"}
                    fill
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["sec-two"]}>
          <div
            className={`${styles["sec-two-flex"]} ${styles["displayOnTab"]}`}
          >
            <Link href={"/contact"}>
              <div className={styles["contact-wrap"]}>
                <Image
                  src={"/icons/email_icon.svg"}
                  alt={"Contact Link"}
                  fill
                />
              </div>
            </Link>
          </div>
          <div className={styles["sec-two-flex"]}>
            <p>
              Designed and built by
              <br />
              <Link href="/about">Giuseppe&nbsp;Badagliacca</Link>.
            </p>
            <p>© 2024 All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
