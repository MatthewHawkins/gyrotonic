/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";

import image from "../assets/images/keep1.png";
import LessonCard from "../components/LessonCard";
import LessonDisplay from "../components/LessonDisplay";

import card1 from "../assets/images/hallowin.jpeg";
import card2 from "../assets/images/tricep-man.jpeg";
import card3 from "../assets/images/smile.jpeg";
import card4 from "../assets/images/worth.jpeg";

import { useTranslation } from "react-i18next";
import { translatePrices } from "../utlities/translations";

export default function Lessons() {
  const [translationsLoaded, setTranslationsLoaded] = useState(false);

  useEffect(() => {
    translatePrices();
    setTranslationsLoaded(true); // Force re-render after adding translations
  }, []);

  const { t } = useTranslation();

  const hoursStyles = css`
    /* background-image: linear-gradient(rgba(255,255,255,.6),rgba(255,255,255,.6)), url(${image}); */
    background-color: var(--background-color-primary);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1.15em;
    min-height: 100vh;
  `;

  const infoStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Cormorant Garamond", serif;
    padding: 10px 30px 10px 10px;
    width: 100%;
    font-size: 1.15em;
  `;

  const hoursTitle = css`
    font-size: var(--font-size-title);
    position: relative;
  `;

  const underlineStyles = css`
    ::before {
      content: "";
      position: absolute;
      height: 2px;
      width: 160px;
      background-color: #000000 !important;
      bottom: -2px;
    }
    ::before {
      left: 0;
    }
  `;

  const hoursText = css`
    font-size: var(--font-size-regular);
    font-weight: 500;
    text-align: left;
    @media (min-width: 576px) {
      max-width: 100%;
    }

    @media (min-width: 768px) {
      max-width: 75%;
    }

    @media (min-width: 1200px) {
      max-width: 65%;
    }
  `;

  const cancelText = css`
    font-size: var(--font-size-regular);
    font-weight: 500;
    text-align: left;
    @media (min-width: 576px) {
      max-width: 100%;
    }

    @media (min-width: 768px) {
      max-width: 65%;
    }

    @media (min-width: 1200px) {
      max-width: 40%;
    }
  `;

  const sectionThreeTitle = css`
    font-size: 2.25rem;
    margin-left: 5%;
    margin-top: 2.25em;
    margin-bottom: -1em;
  `;

  const cardsSingle = [
    <LessonCard
      title={t("title1_single")}
      photo={card1}
      cost="€55"
      description={t("description1_single")}
    />,
    <LessonCard
      title={t("title2_single")}
      photo={card4}
      cost="€130"
      description={t("description2_single")}
    />,
    <LessonCard
      title={t("title3_single")}
      photo={card2}
      cost="€500"
      description={t("description3_single")}
    />,
  ];
  const cardsTandem = [
    <LessonCard
      title={t("title1_tandem")}
      photo={card3}
      cost="€35 p.p"
      description={t("description1_tandem")}
    />,
    <LessonCard
      title={t("title2_tandem")}
      photo={card2}
      cost="€100 p.p"
      description={t("description2_tandem")}
    />,
    <LessonCard
      title={t("title3_tandem")}
      photo={card1}
      cost="€320 p.p"
      description={t("description3_tandem")}
    />,
  ];
  const cardsGroup = [
    <LessonCard
      title={t("title1_group")}
      photo={card4}
      cost="€18 p.p"
      description={t("description1_group")}
    />,
    <LessonCard
      title={t("title2_group")}
      photo={card3}
      cost="€160 p.p"
      description={t("description2_group")}
    />,
  ];

  return (
    <div css={hoursStyles} id="hours-and-prices">
      <div css={infoStyles}>
        <h2 css={hoursTitle}>
          {t("gyrotonicLessons")}
          {/* <span css={underlineStyles} /> */}
        </h2>
        <div css={hoursText}>
          {/* Training dates can be chosen according to openings in the trainers' schedules.
          <br></br>Registration is done by phone , e-mail or personally in the studio.
          <br></br>We offer several packages for individuals and tandem training: */}
          {t("gyrotonicDescription")}
        </div>

        <h2 css={sectionThreeTitle}>
          {t("individualSessions")}
          {/* <span css={underlineStyles} /> */}
        </h2>
        <LessonDisplay cards={cardsSingle} />

        <h2 css={sectionThreeTitle}>
          {t("tandemSessions")}
          {/* <span css={underlineStyles} /> */}
        </h2>
        <LessonDisplay cards={cardsTandem} />
      </div>

      <div css={infoStyles}>
        <h2 css={hoursTitle}>
          {t("gyrokinesisLessons")}
          {/* <span css={underlineStyles} /> */}
        </h2>
        <div css={hoursText}>{t("gyrokinesisDescription")}</div>

        <h2 css={sectionThreeTitle}>
          {t("groupSessions")}
          {/* <span css={underlineStyles} /> */}
        </h2>
        <LessonDisplay cards={cardsGroup} />
        <div css={cancelText}>
          {t("cancellationPolicy")}
          <br /> - <b>The Roots Team</b>.
        </div>
      </div>
    </div>
  );
}
