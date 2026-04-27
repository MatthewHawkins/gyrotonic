/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import image1 from "../assets/images/caro_1.jpeg";
import image2 from "../assets/images/caro_2.jpeg";
import image3 from "../assets/images/caro_3.jpeg";
import image4 from "../assets/images/caro_4.jpeg";
import image5 from "../assets/images/caro_5.jpeg";
import image6 from "../assets/images/caro_6.jpeg";

import Gyrotonic from "../components/Gyrotonic";
import useReveal from "../hooks/useReveal";

import { useTranslation } from "react-i18next";
import { translateOurStudio } from "../utlities/translations";

const sectionStyles = css`
  background-color: var(--color-bg);
  padding: var(--space-section-y) var(--space-section-x);
`;

const innerStyles = css`
  max-width: var(--container);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: var(--space-8);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: var(--space-7);
  }
`;

const textColStyles = css`
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
  max-width: 56ch;

  & + & {
    margin-top: var(--space-4);
  }
`;

const sliderStyles = css`
  width: 100% !important;
  height: 480px !important;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);

  .awssld__bullets {
    bottom: var(--space-4) !important;
  }

  .awssld__bullets button {
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  .awssld__bullets .awssld__bullets--active {
    background: #ffffff;
    transform: scale(1.4);
  }

  @media (max-width: 768px) {
    height: 360px !important;
  }

  @media (max-width: 480px) {
    height: 280px !important;
  }
`;

export default function OurStudio() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const ref = useReveal();

  useEffect(() => {
    translateOurStudio();
  }, []);

  const { t } = useTranslation();

  return (
    <section css={sectionStyles} ref={ref}>
      <div css={innerStyles}>
        <div css={textColStyles}>
          <span className="eyebrow">The Roots</span>
          <h2 css={titleStyles}>{t("studioTitle")}</h2>
          <p css={bodyStyles}>
            {t("studio1")} <Gyrotonic />
            {t("studio2")} <Gyrotonic text="GYROKINESIS" />
            {t("studio3")}
          </p>
          <p css={bodyStyles}>{t("studio4")}</p>
        </div>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={4000}
          css={sliderStyles}
        >
          <div data-src={image1}></div>
          <div data-src={image2}></div>
          <div data-src={image3}></div>
          <div data-src={image4}></div>
          <div data-src={image5}></div>
          <div data-src={image6}></div>
        </AutoplaySlider>
      </div>
    </section>
  );
}
