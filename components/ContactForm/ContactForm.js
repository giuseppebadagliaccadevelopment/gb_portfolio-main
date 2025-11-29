"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./ContactForm.module.scss";
// import Image from "next/image";
// import Link from "next/link";
import ScaleUp from "../ScaleUp/ScaleUp";
import parse from "html-react-parser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ContactForm({}) {
  const wrapperRef = useRef(null);
  const [nameStatus, setnameStatus] = useState();
  const [phoneStatus, setphoneStatus] = useState();
  const [emailStatus, setemailStatus] = useState();
  const [commentStatus, setcommentStatus] = useState();
  const [buttonText, setButtonText] = useState("submit");
  const [buttonSubmitted, setbuttonSubmitted] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const commentRef = useRef();
  const [formError, setformError] = useState("");
  const [formSuccess, setformSuccess] = useState(false);
  useEffect(() => {
    gsap.to(wrapperRef.current, {
      autoAlpha: 1,
      duration: 0.5,
      delay: 0.1,
    });
  }, []);
  const validateForm = () => {
    const namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/; // Requires first and last name
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/; // Matches (555) 555-5555
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

    const resetError = () => {
      setTimeout(() => {
        setButtonText("submit");
      }, 1000);
      setTimeout(() => {
        setformError("");
      }, 5000);
    };

    if (!nameRef.current.value || !namePattern.test(nameRef.current.value)) {
      setformError(
        "Please enter a valid first and last name (e.g., John Doe)."
      );
      resetError();
      return false;
    }

    if (!phoneRef.current.value || !phonePattern.test(phoneRef.current.value)) {
      setformError(
        "Please enter a valid phone number in the format (555) 555-5555."
      );
      resetError();
      return false;
    }

    if (!emailRef.current.value || !emailPattern.test(emailRef.current.value)) {
      setformError(
        "Please enter a valid email address (e.g., email@example.com)."
      );
      resetError();
      return false;
    }
    return true;
  };
  async function handleSubmit(e) {
    e.preventDefault();
    // 1 - processing
    setButtonText("Sending...");
    // 2 - validate entered values
    const formValidated = validateForm();
    // 4 - forward message
    if (formValidated) {
      // mail function
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          //need access_key here
          access_key: "cd0504b5-9174-4b2b-884d-81bd642e859b",
          body: "Giuseppe Badagliacca Portfolio Site",
          name: nameRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
          message: commentRef.current.value,
        }),
      });

      setTimeout(() => {
        setformSuccess((prev) => !prev);
      }, 1000);
    }
  }

  function handleLabelClick(field) {
    switch (field) {
      case "name":
        setnameStatus(true);
        nameRef.current.focus();
        break;
      case "email":
        setemailStatus(true);
        emailRef.current.focus();
        break;
      case "phone":
        setphoneStatus(true);
        phoneRef.current.focus();
        break;
      case "hometype":
        sethometypeStatus(true);
        hometypeRef.current.focus();
        break;
      case "comments":
        setcommentStatus(true);
        commentRef.current.focus();
        break;
    }
  }
  function handleFocus(field) {
    switch (field) {
      case "name":
        setnameStatus(true);
        break;
      case "email":
        setemailStatus(true);
        break;
      case "phone":
        setphoneStatus(true);
        break;
      case "comments":
        setcommentStatus(true);
        break;
    }
  }

  function handlePhoneInputChange(e) {
    let input = e.target.value;
    input = input.replace(/\D/g, ""); // Remove all non-digit characters
    input = input.substring(0, 10); // Limit to first 10 digits
    let size = input.length;

    if (size == 0) {
      input = input;
    } else if (size < 4) {
      input = "(" + input;
    } else if (size < 7) {
      input = "(" + input.substring(0, 3) + ") " + input.substring(3, 6);
    } else {
      input =
        "(" +
        input.substring(0, 3) +
        ") " +
        input.substring(3, 6) +
        "-" +
        input.substring(6, 10);
    }
    e.target.value = input;
  }

  return (
    <section className={styles.wrapper} ref={wrapperRef}>
      <div className={styles["inner-wrap"]}>
        {formSuccess === false ? (
          <ScaleUp>
            <div className={styles["heading-wrap"]}>
              <h2>Get in touch</h2>
              <p>
                Kindly leave your contact information below and Giuseppe will
                reach&nbsp;out&nbsp;directly!
              </p>
            </div>
          </ScaleUp>
        ) : null}
        <div className={styles.formContainer}>
          {formSuccess === false ? (
            <ScaleUp>
              <form className={styles["contact-grid"]} onSubmit={handleSubmit}>
                <div className={styles["grid-item"]}>
                  <div className={styles.holdfield}>
                    <div
                      className={`${styles.label} ${
                        nameStatus ? styles.move : ""
                      }`}
                      onClick={() => handleLabelClick("name")}
                    >
                      Your Name*
                    </div>
                    <input
                      type="text"
                      className={styles.contactfield}
                      ref={nameRef}
                      onFocus={() => handleLabelClick("name")}
                    />
                  </div>
                </div>
                <div className={styles["grid-item"]}>
                  <div className={styles.holdfield}>
                    <div
                      className={`${styles.label} ${
                        phoneStatus ? styles.move : ""
                      }`}
                      onClick={() => handleLabelClick("phone")}
                    >
                      Phone*
                    </div>
                    <input
                      type="text"
                      className={styles.contactfield}
                      ref={phoneRef}
                      onFocus={() => handleLabelClick("phone")}
                      onChange={handlePhoneInputChange}
                    />
                  </div>
                </div>
                <div className={styles["grid-item"]}>
                  <div className={styles.holdfield}>
                    <div
                      className={`${styles.label} ${
                        emailStatus ? styles.move : ""
                      }`}
                      onClick={() => handleLabelClick("email")}
                    >
                      Email*
                    </div>
                    <input
                      type="email"
                      className={styles.contactfield}
                      ref={emailRef}
                      onFocus={() => handleLabelClick("email")}
                    />
                  </div>
                </div>
                <div className={styles["grid-item"]}>
                  <div className={styles.holdfield}>
                    <div
                      className={`${styles.label} ${
                        commentStatus ? styles.move : ""
                      }`}
                      onClick={() => handleLabelClick("comments")}
                    >
                      Comments
                    </div>
                    <input
                      type="text"
                      className={styles.contactfield}
                      ref={commentRef}
                      onFocus={() => handleLabelClick("comments")}
                    />
                  </div>
                </div>
                <div className={styles["grid-item"]}>
                  <div className={styles.errors}>
                    <p>{parse(formError)}</p>
                  </div>
                </div>
                <div className={styles["grid-item"]}>
                  <button className={`${styles.btn}`} type="submit">
                    <p>{buttonText}</p>
                  </button>
                </div>
              </form>
            </ScaleUp>
          ) : (
            ""
          )}
        </div>
        {formSuccess ? (
          <div className={`${styles.thankyoucontent}`}>
            Thank you for your inquiry!
            <br />
            <br />
            Giuseppe will reach out as soon as&nbsp;possible.
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
