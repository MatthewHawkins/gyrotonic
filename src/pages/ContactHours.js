/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

import image from "../assets/images/background1.jpeg";
import AnimatedButton from "../components/AnimatedButton";
import Lessons from "../sections/Lessons";
import useReveal from "../hooks/useReveal";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

import { useTranslation } from "react-i18next";
import { translateContact } from "../utlities/translations";

export default function ContactHours() {
  const location = useLocation();
  const [, setTranslationsLoaded] = useState(false);
  const contactRef = useReveal();

  useEffect(() => {
    translateContact();
    setTranslationsLoaded(true);
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
    emailjs
      .sendForm(
        "service_5cx67k6",
        "template_xe2xyt2",
        formData.current,
        "8D1H1HpW1LYZpGiGJ"
      )
      .then(
        () => {
          setSubmitStatus("success");
          setName("");
          setSubject("");
          setFormEmail("");
          setMessage("");
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        () => {
          setSubmitStatus("error");
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  const pageStyles = css`
    display: flex;
    flex-direction: column;
  `;

  const contactSectionStyles = css`
    position: relative;
    background-image: linear-gradient(
        rgba(241, 238, 228, 0.9),
        rgba(241, 238, 228, 0.92)
      ),
      url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    padding: var(--space-section-y) var(--space-section-x);

    @media (max-width: 768px) {
      background-attachment: scroll;
    }
  `;

  const contactInnerStyles = css`
    max-width: var(--container);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
    align-items: start;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: var(--space-7);
    }
  `;

  const contactColStyles = css`
    display: flex;
    flex-direction: column;
  `;

  const titleStyles = css`
    font-size: var(--font-size-h2);
    margin-bottom: var(--space-3);

    &::after {
      content: "";
      display: block;
      width: 56px;
      height: 2px;
      background: var(--color-accent);
      margin-top: var(--space-4);
    }
  `;

  const studioNameStyles = css`
    font-family: var(--font-display);
    font-size: var(--font-size-2xl);
    font-weight: var(--weight-medium);
    color: var(--color-ink);
    margin-top: var(--space-6);
    margin-bottom: var(--space-1);
  `;

  const tagStyles = css`
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    color: var(--color-ink-soft);
    margin-bottom: var(--space-5);
  `;

  const contactListStyles = css`
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    margin-bottom: var(--space-6);
  `;

  const contactItemStyles = css`
    display: flex;
    align-items: center;
    gap: var(--space-3);
    font-family: var(--font-body);
    font-size: var(--font-size-md);
    color: var(--color-ink);
  `;

  const contactIconStyles = css`
    color: var(--color-accent);
    flex-shrink: 0;
  `;

  const mapStyles = css`
    width: 100%;
    aspect-ratio: 4 / 3;
    border: 0;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow);
    margin-top: var(--space-3);
  `;

  const formIntroStyles = css`
    font-family: var(--font-body);
    font-size: var(--font-size-md);
    color: var(--color-ink-muted);
    line-height: var(--leading-relaxed);
    margin-top: var(--space-5);
    margin-bottom: var(--space-6);
    max-width: 52ch;
  `;

  const formStyles = css`
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    width: 100%;

    & > div {
      display: flex;
      flex-direction: column;
    }

    input,
    textarea {
      width: 100%;
      font-family: var(--font-body);
      font-size: var(--font-size-base);
      color: var(--color-ink);
      background: var(--color-surface);
      border: 1px solid var(--color-line);
      border-radius: var(--radius);
      padding: var(--space-3) var(--space-4);
      transition: border-color var(--transition-fast),
        box-shadow var(--transition-fast);
      outline: none;

      &::placeholder {
        color: var(--color-ink-soft);
      }

      &:focus {
        border-color: var(--color-accent);
        box-shadow: 0 0 0 3px var(--color-accent-soft);
      }
    }

    input {
      height: 48px;
    }

    textarea {
      min-height: 140px;
      resize: vertical;
    }

    button {
      border: 0;
      background: transparent;
      padding: 0;
      align-self: flex-start;
      margin-top: var(--space-3);

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    @media (max-width: 768px) {
      input,
      textarea {
        font-size: 16px;
      }
      button {
        align-self: stretch;
      }
    }
  `;

  const errorStyles = css`
    color: #b3261e;
    font-family: var(--font-body);
    font-size: var(--font-size-sm);
    margin-top: var(--space-1);
  `;

  const statusStyles = css`
    padding: var(--space-3) var(--space-4);
    border-radius: var(--radius);
    margin-bottom: var(--space-4);
    font-family: var(--font-body);
    font-size: var(--font-size-sm);
    text-align: center;

    &.success {
      background: #e7f4e7;
      color: #1d5b1d;
      border: 1px solid #b8dcb8;
    }
    &.error {
      background: #fbecec;
      color: #6b1f1b;
      border: 1px solid #e8b8b6;
    }
  `;

  return (
    <div css={pageStyles}>
      <Lessons />
      <section id="contact" css={contactSectionStyles} ref={contactRef}>
        <div css={contactInnerStyles}>
          <div css={contactColStyles}>
            <span className="eyebrow">Get In Touch</span>
            <h2 css={titleStyles}>{t("contactTitle")}</h2>

            <div css={studioNameStyles}>The Roots Studio</div>
            <div css={tagStyles}>Nicola Strada & Federico Moiana</div>

            <div css={contactListStyles}>
              <div css={contactItemStyles}>
                <LocalPhoneIcon css={contactIconStyles} fontSize="small" />
                +49 178 614 5467
              </div>
              <div css={contactItemStyles}>
                <WhatsAppIcon css={contactIconStyles} fontSize="small" />
                +39 351 789 5709
              </div>
              <div css={contactItemStyles}>
                <WhatsAppIcon css={contactIconStyles} fontSize="small" />
                +43 660 916 3118
              </div>
              <div css={contactItemStyles}>
                <EmailIcon css={contactIconStyles} fontSize="small" />
                the.roots.exercise@gmail.com
              </div>
              <div css={contactItemStyles}>
                <FmdGoodIcon css={contactIconStyles} fontSize="small" />
                Deutschherrnpfad 14-20, 66117 Saarbrücken, Germany
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.3868963780806!2d6.975365076862796!3d49.23115347440124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b3fecd9b4591%3A0x681b2aa254046a4a!2sDeutschherrnpfad%2014-20%2C%2066117%20Saarbr%C3%BCcken%2C%20Germany!5e0!3m2!1sen!2sus!4v1777303283670!5m2!1sen!2sus"
              css={mapStyles}
              title="The Roots Studio location map - Deutschherrnpfad 14-20, 66117 Saarbrücken, Germany"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div css={contactColStyles}>
            <p css={formIntroStyles}>
              <b>{t("contactIntro")}</b>
              {t("contactText")}
            </p>

            {submitStatus && (
              <div css={statusStyles} className={submitStatus}>
                {submitStatus === "success"
                  ? t("emailSuccess") ||
                    "Thank you! Your message has been sent successfully."
                  : t("emailError") ||
                    "Sorry, there was an error sending your message. Please try again."}
              </div>
            )}

            <form
              ref={formData}
              id="emailForm"
              onSubmit={handleSubmit}
              css={formStyles}
            >
              <div>
                <label htmlFor="name" className="visually-hidden">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name *"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  name="user_name"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  style={errors.name ? { borderColor: "#b3261e" } : {}}
                />
                {errors.name && <div css={errorStyles}>{errors.name}</div>}
              </div>

              <div>
                <label htmlFor="subject" className="visually-hidden">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject *"
                  value={subject}
                  onChange={(event) => {
                    setSubject(event.target.value);
                    if (errors.subject) setErrors({ ...errors, subject: "" });
                  }}
                  name="user_subject"
                  aria-required="true"
                  aria-invalid={!!errors.subject}
                  style={errors.subject ? { borderColor: "#b3261e" } : {}}
                />
                {errors.subject && (
                  <div css={errorStyles}>{errors.subject}</div>
                )}
              </div>

              <div>
                <label htmlFor="email" className="visually-hidden">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email *"
                  value={formEmail}
                  onChange={(event) => {
                    setFormEmail(event.target.value);
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  name="user_email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  style={errors.email ? { borderColor: "#b3261e" } : {}}
                />
                {errors.email && <div css={errorStyles}>{errors.email}</div>}
              </div>

              <div>
                <label htmlFor="message" className="visually-hidden">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Message *"
                  value={message}
                  onChange={(event) => {
                    setMessage(event.target.value);
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  name="message"
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  style={errors.message ? { borderColor: "#b3261e" } : {}}
                />
                {errors.message && (
                  <div css={errorStyles}>{errors.message}</div>
                )}
              </div>

              <button type="submit" disabled={isSubmitting}>
                <AnimatedButton text={isSubmitting ? "SENDING..." : "SUBMIT"} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
