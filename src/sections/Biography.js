/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";

import fede from "../assets/images/fede.png";
import nico from "../assets/images/nico-modified.png";

import useReveal from "../hooks/useReveal";

import { useTranslation } from "react-i18next";
import { translateBiography } from "../utlities/translations";

const sectionStyles = css`
  background-color: var(--color-bg-alt);
  padding: var(--space-section-y) var(--space-section-x);
`;

const innerStyles = css`
  max-width: var(--container);
  margin: 0 auto;
`;

const headerStyles = css`
  text-align: center;
  margin-bottom: var(--space-8);
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

const bioGridStyles = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: var(--space-7);
  }
`;

const bioCardStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const headshotStyles = css`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: var(--space-5);
  box-shadow: var(--shadow);
  transition: transform var(--transition-slow);

  ${bioCardStyles}:hover & {
    transform: scale(1.03);
  }

  @media (max-width: 768px) {
    width: 168px;
    height: 168px;
  }
`;

const bioTextStyles = css`
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  line-height: var(--leading-relaxed);
  color: var(--color-ink-muted);
  max-width: 52ch;
`;

const quoteStyles = css`
  margin: var(--space-9) auto 0;
  max-width: 720px;
  text-align: center;
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 2.6vw, 2.25rem);
  font-style: italic;
  font-weight: var(--weight-medium);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  color: var(--color-ink);
  position: relative;
  padding: var(--space-7) var(--space-5) 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 32px;
    height: 1px;
    background: var(--color-accent);
  }
`;

export default function Biography() {
  const ref = useReveal();
  const { t } = useTranslation();

  useEffect(() => {
    translateBiography();
  }, []);

  return (
    <section css={sectionStyles} id="team" ref={ref}>
      <div css={innerStyles}>
        <header css={headerStyles}>
          <span className="eyebrow">Meet The Team</span>
          <h2 css={titleStyles}>{t("bioTitle")}</h2>
        </header>
        <div css={bioGridStyles}>
          <article css={bioCardStyles}>
            <img
              src={fede}
              css={headshotStyles}
              alt="Federico - Gyrotonic instructor and co-founder of The Roots Studio"
            />
            <p css={bioTextStyles}>{t("fede")}</p>
          </article>
          <article css={bioCardStyles}>
            <img
              src={nico}
              css={headshotStyles}
              alt="Nico - Gyrotonic instructor and co-founder of The Roots Studio"
            />
            <p css={bioTextStyles}>{t("nico")}</p>
          </article>
        </div>
        <blockquote css={quoteStyles}>
          "Your body is capable of amazing things"
        </blockquote>
      </div>
    </section>
  );
}
