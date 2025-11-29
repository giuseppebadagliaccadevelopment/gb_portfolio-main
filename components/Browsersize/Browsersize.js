"use client";
import { useEffect, useState } from "react";
import styles from "./Browsersize.module.scss";
export default function Browsersize() {
  const [browserWidth, setbrowserWidth] = useState();
  const [browserHeight, setbrowserHeight] = useState();

  useEffect(() => {
    setbrowserWidth(window.innerWidth);
    setbrowserHeight(window.innerHeight);

    window.addEventListener("resize", handleResize);
    function handleResize() {
      setbrowserWidth(window.innerWidth);
      setbrowserHeight(window.innerHeight);
    }
  }, []);
  return (
    <div className={styles.browserwidth}>
      {browserWidth} x {browserHeight}
    </div>
  );
}
