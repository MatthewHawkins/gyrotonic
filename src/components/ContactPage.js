/** @jsxImportSource @emotion/react */

import React, { useRef, useState, useEffect } from "react";

import { css, keyframes } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { translatePrices } from "../utlities/translations";

export default function Contact(props) {
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
    // setName("")
    // setSubject("")
    // setFormEmail("")
    // setMessage("")
    // alert("Email sent - thank you!")
  }

  const bodyStyles = css`
    display: flex;
    height: 100vh;
    position: relative;
    align-items: center;
    font-family: "Titillium Web", sans-serif;
    @media screen and (max-width: 768px) {
      margin-top: 400px;
    }
  `;

  const contactBackgroundStyles = css`
    width: 20px;
    height: 100%;
    background-color: #41bf63;
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
    align-items: center;
    margin: 50px 0px;
    font-weight: 300px;

    @media screen and (max-width: 768px) {
      margin: 20px 0px;
      width: 100%;
    }
  `;

  const contactIconStyles = css`
    height: 30px;
    width: 30px;
    margin-right: 20px;
  `;

  const rightStyles = css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space;
    flex-direction: column;

    form {
      margin-top: 20px;
      outline: none;
    }
    input {
      width: 55%;
      height: 50px;
      border: hidden;
      border-bottom: 1px solid black;
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
    }
    button {
      border: hidden;
      background-color: white;
    }

    @media screen and (max-width: 768px) {
      form {
        margin-top: 0px;
        display: flex;
        flex-wrap: wrap;
      }

      input {
        width: 100%;
        height: 45px;
        margin: 10px 0;
        font-size: 16px;
      }

      textarea {
        font-size: 16px;
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
    <div id="contact" css={bodyStyles}>
      <div css={contactBackgroundStyles}></div>
      <div css={contactWrapperStyles}>
        <div css={leftStyles}>
          <h1 css={contactTitleStyles}> Feel free to get in touch</h1>
          <div css={contactInfoStyles}>
            <div css={contactItemStyles}>+1(503)-475-5898</div>
            <div css={contactItemStyles}>matthew.hawkins1115@gmail.com</div>
            <div css={contactItemStyles}>Matthew#2254</div>
          </div>
        </div>
        <div css={rightStyles}>
          <p css={contactDescriptionStyles}>
            <b>I'd love to hear from you!</b> Please reach out with any
            inquiries or questions you might have about web dev opportunities,
            Oregon State, or anything else.
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
              type="email"
              placeholder="Email"
              value={formEmail}
              onChange={(event) => {
                setFormEmail(event.target.value);
              }}
              name="user_email"
              required
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
              <button text="SUBMIT" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
