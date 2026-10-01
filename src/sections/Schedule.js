/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";

import useReveal from "../hooks/useReveal";

import { useTranslation } from "react-i18next";
import { translateSchedule } from "../utlities/translations";

const BOOKING_URL = "https://calendly.com/the-roots-exercise/new-meeting";
const EMBED_URL = `${BOOKING_URL}?embed_domain=therootsstudios.com&embed_type=Inline`;

export default function Schedule() {
  const [, setTranslationsLoaded] = useState(false);
  const sectionRef = useReveal();

  useEffect(() => {
    translateSchedule();
    setTranslationsLoaded(true);
  }, []);

  const { t } = useTranslation();

  const sectionStyles = css`
    position: relative;
    background: var(--color-bg);
    padding: var(--space-section-y) var(--space-section-x);
  `;

  const innerStyles = css`
    max-width: var(--container);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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
      margin: var(--space-4) auto 0;
    }
  `;

  const introStyles = css`
    font-family: var(--font-body);
    font-size: var(--font-size-md);
    color: var(--color-ink-muted);
    line-height: var(--leading-relaxed);
    max-width: 60ch;
    margin: var(--space-5) auto var(--space-6);
  `;

  const iframeWrapperStyles = css`
    width: 100%;
    max-width: 960px;
    background: var(--color-surface);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow);
    overflow: hidden;
    margin-top: var(--space-4);
  `;

  const iframeStyles = css`
    width: 100%;
    height: 800px;
    border: 0;
    display: block;

    @media (max-width: 768px) {
      height: 700px;
    }
  `;

  const fallbackLinkStyles = css`
    display: inline-block;
    margin-top: var(--space-5);
    font-family: var(--font-body);
    font-size: var(--font-size-sm);
    color: var(--color-ink-muted);

    a {
      color: var(--color-accent);
      text-decoration: underline;
    }
  `;

  const paymentNoteStyles = css`
    font-family: var(--font-body);
    font-size: var(--font-size-sm);
    color: var(--color-ink-soft);
    font-style: italic;
    margin-top: var(--space-5);
    max-width: 60ch;
  `;

  return (
    <section id="schedule" css={sectionStyles} ref={sectionRef}>
      <div css={innerStyles}>
        <span className="eyebrow">{t("scheduleEyebrow")}</span>
        <h2 css={titleStyles}>{t("scheduleTitle")}</h2>
        <p css={introStyles}>{t("scheduleIntro")}</p>

        <div css={iframeWrapperStyles}>
          <iframe
            src={EMBED_URL}
            css={iframeStyles}
            title={t("scheduleTitle")}
            loading="lazy"
          />
        </div>

        <p css={fallbackLinkStyles}>
          {t("scheduleFallback")}{" "}
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            {t("scheduleOpenInNewTab")}
          </a>
        </p>

        <p css={paymentNoteStyles}>{t("schedulePaymentNote")}</p>
      </div>
    </section>
  );
}
