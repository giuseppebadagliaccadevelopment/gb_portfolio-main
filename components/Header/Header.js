"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { CustomEase } from "gsap/dist/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";

gsap.registerPlugin(CustomEase, ScrollTrigger);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [smallScreen, setSmallScreen] = useState(true);
  const pathname = usePathname();
  const regMenuRef = useRef(null);
  const expandMenuRef = useRef(null);
  const tl = useRef();
  const linkRefs = useRef([]);
  const mobileLogoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      regMenuRef.current,
      { autoAlpha: 0, yPercent: -100 },
      { autoAlpha: 1, yPercent: 0, duration: 0.7, delay: 0.2 }
    );

    tl.current = gsap.timeline({ paused: true });
    tl.current.fromTo(
      expandMenuRef.current,
      { autoAlpha: 0 },
      { right: 0, autoAlpha: 1, duration: 0.25 }
    );

    linkRefs.current.forEach((ref) => {
      tl.current.fromTo(
        ref,
        { autoAlpha: 0, yPercent: -10 },
        { autoAlpha: 1, yPercent: 0, duration: 0.25 }
      );
    });

    return () => tl.current.kill();
  }, []);

  useEffect(() => {
    if (toggle) {
      tl.current.play().timeScale(1.8);
      gsap.fromTo(
        mobileLogoRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.5, delay: 1 }
      );
    } else {
      tl.current.timeScale(3.2).reverse();
      gsap.fromTo(mobileLogoRef.current, { autoAlpha: 1 }, { autoAlpha: 0 });
    }
  }, [toggle]);

  useEffect(() => {
    const handleResize = () => setSmallScreen(window.innerWidth < 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!smallScreen) setToggle(false);
  }, [smallScreen]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      ref={regMenuRef}
    >
      <div className={styles.holdcontent}>
        <div className={`${styles["inner-content"]} inner-wrap`}>
          <Link href={`/`}>
            <h2 className={[toggle ? styles.toggle : null]}>
              giuseppe&nbsp;Badagliacca
            </h2>
          </Link>
          <ul>
            {["/", "projects", "/about", "/contact"].map((path) =>
              path === "projects" ? (
                <li
                  key={path}
                  className={
                    pathname === path ? styles.active : styles.projects
                  }
                >
                  <a href={"/#projects"}>
                    <p>Projects</p>
                  </a>
                </li>
              ) : (
                <li
                  key={path}
                  className={pathname === path ? styles.active : null}
                >
                  <Link href={path}>
                    <p>{path.slice(1) || "home"}</p>
                  </Link>
                </li>
              )
            )}
          </ul>
          <button
            className={`${styles.hamburger} ${toggle ? styles.toggle : null} ${
              styles["display-on-small"]
            }`}
            onClick={() => setToggle((prev) => !prev)}
            aria-label="Hamburger Menu Dropdown Button"
          >
            {[...Array(3)].map((_, index) => (
              <span
                key={index}
                className={toggle ? styles["active"] : null}
              ></span>
            ))}
          </button>
        </div>
      </div>
      <div ref={expandMenuRef} className={styles.expandednav}>
        <ul>
          {["/", "projects", "/about", "/contact"].map((path, index) =>
            path === "projects" ? (
              <li
                key={"/#projects"}
                className={pathname === path ? styles.active : null}
                ref={(el) => (linkRefs.current[index] = el)}
              >
                <a
                  href={"/#projects"}
                  onClick={() => (toggle ? setToggle(false) : null)}
                >
                  <p>Projects</p>
                </a>
              </li>
            ) : (
              <li
                key={path}
                className={pathname === path ? styles.active : null}
                ref={(el) => (linkRefs.current[index] = el)}
              >
                <Link href={path} onClick={() => setToggle((prev) => !prev)}>
                  <p>{path.slice(1) || "home"}</p>
                </Link>
              </li>
            )
          )}
        </ul>
        <div
          className={styles["contact-wrap"]}
          ref={(el) => (linkRefs.current[4] = el)}
        >
          <a href="tel:631.926.1023">
            <p>T: 631.926.1023</p>
          </a>
          <a href="mailto:joebadagliacca@gmail.com">
            <p>E: joebadagliacca@gmail.com</p>
          </a>
        </div>
      </div>
    </header>
  );
}
