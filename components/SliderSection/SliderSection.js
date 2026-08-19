"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./SliderSection.module.scss";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import ScaleUp from "../ScaleUp/ScaleUp";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SliderSection({}) {
  const data = [
    // {
    //   imgPath: "/images/port_icons/P&A_MapPoint.svg",
    //   name: "Park and Arbor",
    //   tech: "next.js",
    //   company: "new world group",
    //   role: "Senior Software Engineer",
    //   description:
    //     "Park and Arbor is a luxury rental brand located in Old Tappan, NJ, designed to reflect the essence of contemporary elegance. The site build highlights modern architecture and luxurious finishes, offering a refined user experience.",
    //   linkout: "https://www.parkandarbor.com/",
    //   itemClass: "parkArbor",
    // },
    {
      imgPath: "/icons/SecondaryLogo_Horizontal_2-Color.svg",
      name: "Vermella Paramus",
      tech: "next.js",
      company: "new world group",
      role: "Senior Software Engineer",
      description:
        "change here.. is a modern rental property in Fort Lee, NJ. Site is designed to showcase the brand's modern luxury and innovative features. The site highlights over 300 new apartments and boasts unique offerings like an on-site fleet of electric FIAT v.",
      linkout: "https://www.vermellaparamus.com/",
      itemClass: "VermellaP",
    },
    {
      imgPath: "/images/port_icons/FH_logo.svg",
      name: "Fiat House",
      tech: "next.js",
      company: "new world group",
      role: "Senior Software Engineer",
      description:
        "Fiat House is a modern rental property in Fort Lee, NJ. Site is designed to showcase the brand's modern luxury and innovative features. The site highlights over 300 new apartments and boasts unique offerings like an on-site fleet of electric FIAT vehicles.",
      linkout: "https://www.fiathouse.com/",
      itemClass: "fiatHouse",
    },
    {
      imgPath: "/images/port_icons/Atlas-logo-white.svg",
      name: "Atlas",
      tech: "next.js",
      company: "new world group",
      role: "Senior Software Engineer",
      description:
        "Atlas is a sleek and sophisticated website showcasing luxury studio, 1, 2, and 3 bedroom apartments in Jersey City. The site is designed to emphasize contemporary elegance and upscale living, highlighting the variety and quality of the residences&nbsp;offered.",
      linkout: "https://www.atlasjc.com/",
      itemClass: "atlas",
    },
    {
      imgPath: "/images/port_icons/FG_Logo.svg",
      name: "Fields Grade",
      tech: "next.js",
      company: "new world group",
      role: "Senior Software Engineer",
      description:
        "Fields Grade is is a portfolio website showcasing the full spectrum of real estate services offered by the company. It emphasizes Fields Grade's expertise and commitment to delivering exceptional results.",
      linkout: "https://www.fieldsgrade.com/",
      itemClass: "fieldsGrade",
    },
    {
      imgPath: "/images/port_icons/Claremont-logo-white.svg",
      name: "Claremont Development",
      tech: "next.js",
      company: "new world group",
      role: "Software Engineer",
      description:
        "Claremont Development is a portfolio website showcasing the legacy and expertise of Claremont Construction Group, a multi-generational firm established in 1954.",
      linkout: "https://www.claredev.com/",
      itemClass: "claremont",
    },
    {
      imgPath: "/images/port_icons/W_Icon_White.dd06d666.svg",
      name: "The Wyldes",
      tech: "next.js",
      company: "new world group",
      role: "Software Engineer",
      description:
        "The Wyldes is a luxury rental brand located in Harrison, NJ, designed to reflect the essence of contemporary elegance. Boasting a 'Nature-Infused Urban Oasis.'",
      linkout: "https://www.thewyldes.com/",
      itemClass: "wyldes",
    },
    {
      imgPath: "/images/port_icons/Illustrator-logo-main-white.svg",
      name: "The Illustrator",
      tech: "next.js",
      company: "new world group",
      role: "Software Engineer",
      description:
        "The Illustrator website is yet another in a portfolio of luxury rental brands located in New Rochelle, NY.",
      linkout: "https://www.livetheillustrator.com/",
      itemClass: "illustrator",
    },
    // {
    //   imgPath: "/images/port_icons/SkyeLofts_Logo-White.svg",
    //   name: "Skye Lofts",
    //   tech: "JavasScript, PHP",
    //   company: "new world group",
    //   role: "Software Engineer",
    //   description:
    //     "Skye Lofts landing page showcases the best of both worlds, highlighting the unique features of both Skye Lofts North and South.",
    //   linkout: "https://skyelofts.com/",
    //   itemClass: "skyeLofts",
    // },
  ];
  return (
    <div className={styles["wrapper"]}>
      <div className={`inner-wrap ${styles["inner-wrap"]}`}>
        <h2>portfolio</h2>
        <div className={styles["grid"]}>
          {data.map((item, index) => {
            const {
              imgPath,
              name,
              description,
              linkout,
              itemClass,
              role,
              tech,
              company,
            } = item;
            return (
              <ScaleUp key={`grid-item-${index}`}>
                <button
                  href={linkout}
                  target="_blank"
                  onClick={() => window.open(linkout, "_blank")}
                >
                  <div
                    className={`${styles["grid-item"]} ${styles[itemClass]}`}
                  >
                    <div className={styles["top"]}>
                      <Image src={imgPath} alt={""} fill />
                      {itemClass === "fiatHouse" && (
                        <div className={styles["top-inner"]}>
                          <div className={styles["line-one"]}></div>
                          <div className={styles["line-two"]}></div>
                          <div className={styles["line-three"]}></div>
                        </div>
                      )}
                      {itemClass === "atlas" && (
                        <div className={styles["top-inner"]}>
                          <div className={styles["line-one"]}></div>
                          <div className={styles["line-two"]}></div>
                        </div>
                      )}
                      {itemClass === "fieldsGrade" && (
                        <div className={styles["top-inner"]}>
                          <div className={styles["line-one"]}></div>
                          <div className={styles["line-two"]}></div>
                        </div>
                      )}
                      {itemClass === "claremont" && (
                        <div className={styles["top-inner"]}>
                          <div className={styles["bottom-icon"]}>
                            <Image
                              src={"/images/port_icons/BG-pattern.svg"}
                              alt={""}
                              fill
                              className={styles["bottom"]}
                            />
                          </div>
                        </div>
                      )}
                      {itemClass === "VermellaP" && (
                        <div className={styles["top-inner"]}>
                          <div className={styles["bottom-icon"]}>
                            <Image
                              src={"/icons/Gold-Pattern-2.svg"}
                              alt={""}
                              fill
                              className={styles["bottom"]}
                            />
                          </div>
                        </div>
                      )}
                      {itemClass === "wyldes" && (
                        <div className={styles["top-inner"]}>
                          <div className={styles["bottom-icon"]}>
                            <Image
                              src={
                                "/images/port_icons/homepage-hero-wyldes_crop.webp"
                              }
                              alt={""}
                              fill
                              className={styles["bottom"]}
                            />
                          </div>
                        </div>
                      )}
                      {itemClass === "illustrator" && (
                        <div className={styles["top-inner"]}>
                          <div className={styles["line-one"]}></div>
                          <div className={styles["line-two"]}></div>
                        </div>
                      )}
                    </div>
                    <div className={styles["bottom"]}>
                      <h3>{name}</h3>
                      <p className={styles["role"]}>{`${role} | ${tech}`}</p>
                      <p className={styles["company"]}>
                        {"@ " + parse(company)}
                      </p>
                      <p className={styles["description"]}>
                        {parse(description)}
                      </p>
                      <Link
                        href={linkout}
                        target="_blank"
                        className={styles["btn"]}
                      >
                        <p>Vist&nbsp;Site</p>
                      </Link>
                    </div>
                  </div>
                </button>
              </ScaleUp>
            );
          })}
        </div>
      </div>
    </div>
  );
}
