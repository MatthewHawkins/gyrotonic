/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";

import Gyrotonic from "../components/Gyrotonic";
import IconDisplay from "../components/IconDisplay";
import useReveal from "../hooks/useReveal";

import methodPicture from "../assets/images/method.jpeg";

import { useTranslation } from "react-i18next";
import { translateMethodology } from "../utlities/translations";

const sectionStyles = css`
  background-color: var(--color-bg-alt);
  padding: var(--space-section-y) var(--space-section-x);
`;

const innerStyles = css`
  max-width: var(--container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 5fr 7fr;
  align-items: start;
  gap: var(--space-8);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: var(--space-7);
  }
`;

const imageWrapStyles = css`
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  aspect-ratio: 4 / 5;

  @media (max-width: 900px) {
    aspect-ratio: 16 / 10;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const imageStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const contentColStyles = css`
  display: flex;
  flex-direction: column;
`;

const titleStyles = css`
  font-size: var(--font-size-h2);
  margin-bottom: var(--space-5);

  &::after {
    content: "";
    display: block;
    width: 56px;
    height: 2px;
    background: var(--color-accent);
    margin-top: var(--space-4);
  }
`;

const bodyStyles = css`
  font-family: var(--font-body);
  font-size: var(--font-size-md);
  line-height: var(--leading-relaxed);
  color: var(--color-ink-muted);

  & + & {
    margin-top: var(--space-4);
  }
`;

const iconWrapStyles = css`
  grid-column: 1 / -1;
  margin-top: var(--space-5);
`;

export default function Methodology() {
  const ref = useReveal();

  useEffect(() => {
    translateMethodology();
  }, []);

  const { t } = useTranslation();

  return (
    <section css={sectionStyles} id="methodology" ref={ref}>
      <div css={innerStyles}>
        <div css={imageWrapStyles}>
          <img
            css={imageStyles}
            src={methodPicture}
            alt="Gyrotonic methodology demonstration - movement therapy in action"
          />
        </div>
        <div css={contentColStyles}>
          <span className="eyebrow">The Method</span>
          <h2 css={titleStyles}>{t("methodTitle")}</h2>
          <p css={bodyStyles}>
            <Gyrotonic />
            {t("method1")}
            <Gyrotonic text="GYROKINESIS" />
            {t("method2")} <Gyrotonic text="GYROTONIC EXPANSION SYSTEM" />,
            {t("method3")}
          </p>
          <p css={bodyStyles}>{t("method4")}</p>
          <p css={bodyStyles}>{t("method5")}</p>
        </div>
        <div css={iconWrapStyles}>
          <IconDisplay />
        </div>
      </div>
    </section>
  );
}
