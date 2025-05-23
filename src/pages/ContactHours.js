/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import image from "../assets/images/background1.jpeg";
import { ContactPage } from "@mui/icons-material";

import AnimatedButton from "../components/AnimatedButton";
import Lessons from "../sections/Lessons";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

import { useTranslation } from "react-i18next";
import { translateContact } from "../utlities/translations";

export default function ContactHours() {
  const location = useLocation();

  const [translationsLoaded, setTranslationsLoaded] = useState(false);

  useEffect(() => {
    translateContact();
    setTranslationsLoaded(true); // Force re-render after adding translations
  }, []);

  const { t } = useTranslation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const pageStyles = css`
    display: flex;
    flex-direction: column;
    font-family: "Cormorant Garamond", serif;
  `;

  const formData = useRef();
  const [name, setName] = useState();
  const [subject, setSubject] = useState();
  const [formEmail, setFormEmail] = useState();
  const [message, setMessage] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_5k4sxcs",
    //     "template_ymal3ma",
    //     formData.current,
    //     "w3ewBSBwkCZ0m3ji-"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    setName("");
    setSubject("");
    setFormEmail("");
    setMessage("");
    alert("Email sent - thank you!");
  }

  const bodyStyles = css`
    /* background-color: #DFE0DE; */

    background-image: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)
      ),
      url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;

    display: flex;
    min-height: 100vh;
    position: relative;
    align-items: center;
  `;

  const contactBackgroundStyles = css`
    width: 20px;
    height: 100%;
    position: absolute;
  `;

  const contactWrapperStyles = css`
    padding: 50px;
    display: flex;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 0px 50px;
    }
  `;

  const leftStyles = css`
    margin-left: 3em;
    flex: 1;
  `;

  const contactTitleStyles = css`
    font-size: var(--font-size-title);
    width: 60%;

    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  `;

  const contactInfoStyles = css``;

  const contactItemStyles = css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    /* align-items: center; */
    margin: 50px 0px;
    font-weight: bold;
    font-size: var(--font-size-regular);

    @media screen and (max-width: 768px) {
      margin: 20px 0px;
      width: 100%;
    }
  `;
  const contactIconStyles = css`
    /* height: 30px; */
    /* margin-right: 2px; */
    margin-bottom: -8px;
  `;

  const rightStyles = css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space;
    flex-direction: column;

    * {
      font-family: "Cormorant Garamond", serif;
    }
    form {
      margin-top: 20px;
      outline: none;
    }
    input {
      width: 55%;
      height: 50px;
      border: hidden;
      margin: 10px 0px;
      font-size: 1em;
      padding-left: 10px;
      outline: none;
    }
    textarea {
      width: 100%;
      margin: 20px 0px;
      font-size: 1em;
      padding-left: 10px;
      border: hidden;
    }
    button {
      border: hidden;
      background-color: transparent;
    }

    @media screen and (max-width: 768px) {
      form {
        margin-top: 0px;
        display: flex;
        flex-wrap: wrap;
      }

      input {
        width: 40%;
        height: 40px;
        margin: 10px;
        margin-left: 0;
      }

      button {
        margin-top: 10px;
      }
    }
  `;

  const contactDescriptionStyles = css`
    font-size: var(--font-size-regular);
    font-weight: 200px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  `;

  return (
    <div css={pageStyles}>
      <Lessons />
      <div id="contact" css={bodyStyles}>
        <div css={contactBackgroundStyles}></div>
        <div css={contactWrapperStyles}>
          <div css={leftStyles}>
            <h1 css={contactTitleStyles}> {t("contactTitle")}</h1>
            <div css={contactInfoStyles}>
              <div css={contactItemStyles}>
                <div
                  css={css`
                    font-size: 1.5em;
                  `}
                >
                  {" "}
                  The Roots Studio{" "}
                </div>
                <div> Nicola Strada & Federico Moiana </div>
                <div>
                  <LocalPhoneIcon css={contactIconStyles} /> +49 178 614 5467{" "}
                </div>
                <div>
                  <WhatsAppIcon css={contactIconStyles} /> +39 351 789 5709{" "}
                </div>
                <div>
                  <WhatsAppIcon css={contactIconStyles} /> +43 660 916 3118{" "}
                </div>
                <div>
                  <EmailIcon css={contactIconStyles} />{" "}
                  the.roots.exercise@gmail.com
                </div>
                <div>
                  <FmdGoodIcon css={contactIconStyles} /> Hindenburgstraße 65,
                  66119 Saarbrücken
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.6900712374945!2d7.00117597686255!3d49.225404574808096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b4183e4f3337%3A0xa056c9a7ccdf65bc!2sHindenburgstra%C3%9Fe%2065%2C%2066119%20Saarbr%C3%BCcken!5e0!3m2!1sen!2sde!4v1748015836316!5m2!1sen!2sde" width="450" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
          <div css={rightStyles}>
            <p css={contactDescriptionStyles}>
              <b>{t("contactIntro")}</b>
              {t("contactText")}
            </p>
            <form ref={formData} id="emailForm" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                name="user_name"
              ></input>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(event) => {
                  setSubject(event.target.value);
                }}
                name="user_subject"
              ></input>
              <input
                type="text"
                placeholder="Email"
                value={formEmail}
                onChange={(event) => {
                  setFormEmail(event.target.value);
                }}
                name="user_email"
              ></input>
              <textarea
                rows="5"
                placeholder="message"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                name="message"
              />
              <button type="submit">
                <AnimatedButton text="SUBMIT" />
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div><Gyrotonic /> is a registered trademark of Gyrotonic Sales Corp and is used with their permission.</div> */}
    </div>
  );
}
