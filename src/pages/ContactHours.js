/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import image from "../assets/images/background1.jpeg";
import { ContactPage } from "@mui/icons-material";
import emailjs from '@emailjs/browser';

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
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) {
      newErrors.name = t("nameRequired") || "Name is required";
    }
    
    if (!formEmail.trim()) {
      newErrors.email = t("emailRequired") || "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formEmail)) {
      newErrors.email = t("emailInvalid") || "Please enter a valid email address";
    }
    
    if (!subject.trim()) {
      newErrors.subject = t("subjectRequired") || "Subject is required";
    }
    
    if (!message.trim()) {
      newErrors.message = t("messageRequired") || "Message is required";
    }
    
    return newErrors;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    // Log form data for debugging
    console.log("Sending email with:", {
      service: "service_5cx67k6",
      template: "template_xe2xyt2",
      form: formData.current,
      fields: {
        user_name: name,
        user_subject: subject,
        user_email: formEmail,
        message: message
      }
    });
    
    emailjs
      .sendForm(
        "service_5cx67k6", // Your service ID
        "template_xe2xyt2", // Your template ID
        formData.current,
        "8D1H1HpW1LYZpGiGJ" // Your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus("success");
          setName("");
          setSubject("");
          setFormEmail("");
          setMessage("");
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          console.error("Error text:", error.text);
          console.error("Error status:", error.status);
          setSubmitStatus("error");
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
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
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 20px;
    }
  `;

  const leftStyles = css`
    margin-left: 3em;
    flex: 1;
    
    @media screen and (max-width: 768px) {
      margin-left: 0;
      padding: 0 10px;
    }
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
    padding: 0 20px;

    * {
      font-family: "Cormorant Garamond", serif;
    }
    form {
      margin-top: 20px;
      outline: none;
      width: 100%;
      max-width: 500px;
      
      & > div {
        width: 100%;
      }
    }
    input {
      width: 100%;
      max-width: 400px;
      height: 50px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      margin: 10px 0px;
      font-size: 1em;
      padding-left: 15px;
      outline: none;
      transition: border-color 0.3s;
      
      &:focus {
        border-color: var(--color-primary);
      }
    }
    textarea {
      width: 100%;
      margin: 20px 0px;
      font-size: 1em;
      padding: 15px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      min-height: 120px;
      resize: vertical;
      transition: border-color 0.3s;
      
      &:focus {
        border-color: var(--color-primary);
      }
    }
    button {
      border: hidden;
      background-color: transparent;
    }

    @media screen and (max-width: 768px) {
      padding: 0 10px;
      
      form {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }

      input {
        width: 100%;
        height: 45px;
        margin: 10px 0;
        font-size: 16px; /* Prevents zoom on iOS */
        max-width: 100%;
      }

      textarea {
        font-size: 16px; /* Prevents zoom on iOS */
        width: 100%;
      }

      button {
        margin-top: 20px;
        width: 100%;
        position: relative;
        z-index: 1;
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
  
  const errorStyles = css`
    color: #d32f2f;
    font-size: 0.875rem;
    margin-top: -5px;
    margin-bottom: 10px;
  `;
  
  const statusMessageStyles = css`
    padding: 12px 16px;
    border-radius: 4px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 500;
    
    &.success {
      background-color: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }
    
    &.error {
      background-color: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }
  `;

  const googleMapStyles = css`
    width: 100%;
    max-width: 450px;
    height: 300px;
    border: 0;
    margin-top: 20px;
    aspect-ratio: 3/2;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 768px) {
      height: 250px;
      margin-top: 15px;
      max-width: 100%;
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
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.6900712374945!2d7.00117597686255!3d49.225404574808096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b4183e4f3337%3A0xa056c9a7ccdf65bc!2sHindenburgstra%C3%9Fe%2065%2C%2066119%20Saarbr%C3%BCcken!5e0!3m2!1sen!2sde!4v1748015836316!5m2!1sen!2sde" 
                  css={googleMapStyles} 
                  title="The Roots Studio location map - Hindenburgstraße 65, 66119 Saarbrücken"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div css={rightStyles}>
            <p css={contactDescriptionStyles}>
              <b>{t("contactIntro")}</b>
              {t("contactText")}
            </p>
            {submitStatus && (
              <div css={statusMessageStyles} className={submitStatus}>
                {submitStatus === "success" 
                  ? t("emailSuccess") || "Thank you! Your message has been sent successfully."
                  : t("emailError") || "Sorry, there was an error sending your message. Please try again."}
              </div>
            )}
            <form ref={formData} id="emailForm" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="visually-hidden">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name *"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    if (errors.name) setErrors({...errors, name: ""});
                  }}
                  name="user_name"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  style={errors.name ? {borderColor: "#d32f2f"} : {}}
                />
                {errors.name && <div css={errorStyles}>{errors.name}</div>}
              </div>
              
              <div>
                <label htmlFor="subject" className="visually-hidden">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject *"
                  value={subject}
                  onChange={(event) => {
                    setSubject(event.target.value);
                    if (errors.subject) setErrors({...errors, subject: ""});
                  }}
                  name="user_subject"
                  aria-required="true"
                  aria-invalid={!!errors.subject}
                  style={errors.subject ? {borderColor: "#d32f2f"} : {}}
                />
                {errors.subject && <div css={errorStyles}>{errors.subject}</div>}
              </div>
              
              <div>
                <label htmlFor="email" className="visually-hidden">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email *"
                  value={formEmail}
                  onChange={(event) => {
                    setFormEmail(event.target.value);
                    if (errors.email) setErrors({...errors, email: ""});
                  }}
                  name="user_email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  style={errors.email ? {borderColor: "#d32f2f"} : {}}
                />
                {errors.email && <div css={errorStyles}>{errors.email}</div>}
              </div>
              
              <div>
                <label htmlFor="message" className="visually-hidden">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Message *"
                  value={message}
                  onChange={(event) => {
                    setMessage(event.target.value);
                    if (errors.message) setErrors({...errors, message: ""});
                  }}
                  name="message"
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  style={errors.message ? {borderColor: "#d32f2f"} : {}}
                />
                {errors.message && <div css={errorStyles}>{errors.message}</div>}
              </div>
              
              <button type="submit" disabled={isSubmitting}>
                <AnimatedButton text={isSubmitting ? "SENDING..." : "SUBMIT"} />
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div><Gyrotonic /> is a registered trademark of Gyrotonic Sales Corp and is used with their permission.</div> */}
    </div>
  );
}
