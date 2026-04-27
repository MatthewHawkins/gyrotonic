/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";

import LessonCard from "../components/LessonCard";
import LessonDisplay from "../components/LessonDisplay";
import useReveal from "../hooks/useReveal";

import card1 from "../assets/images/hallowin.jpeg";
import card2 from "../assets/images/tricep-man.jpeg";
import card3 from "../assets/images/smile.jpeg";
import card4 from "../assets/images/worth.jpeg";

import { useTranslation } from "react-i18next";
import { translatePrices } from "../utlities/translations";

const sectionStyles = css`
  background-color: var(--color-bg);
  padding: var(--space-section-y) var(--space-section-x);
`;

const innerStyles = css`
  max-width: var(--container-wide);
  margin: 0 auto;
`;

const categoryStyles = css`
  & + & {
    margin-top: var(--space-9);
    padding-top: var(--space-9);
    border-top: 1px solid var(--color-line);
  }
`;

const categoryHeaderStyles = css`
  text-align: center;
  margin-bottom: var(--space-7);
  max-width: 64ch;
  margin-left: auto;
  margin-right: auto;
`;

const categoryTitleStyles = css`
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

const categoryDescStyles = css`
  font-family: var(--font-body);
  font-size: var(--font-size-md);
  line-height: var(--leading-relaxed);
  color: var(--color-ink-muted);
`;

const groupStyles = css`
  margin-top: var(--space-7);
`;

const groupTitleStyles = css`
  font-size: var(--font-size-h3);
  font-weight: var(--weight-medium);
  text-align: center;
  margin-bottom: var(--space-5);
  color: var(--color-ink);
`;

const cancelStyles = css`
  margin-top: var(--space-8);
  padding: var(--space-6);
  background: var(--color-surface-soft);
  border: 1px solid var(--color-line-soft);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  line-height: var(--leading-relaxed);
  color: var(--color-ink-muted);
  text-align: center;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
`;

const cancelSignStyles = css`
  display: block;
  margin-top: var(--space-3);
  font-weight: var(--weight-semibold);
  color: var(--color-ink);
`;

export default function Lessons() {
  const [, setTranslationsLoaded] = useState(false);
  const ref = useReveal();

  useEffect(() => {
    translatePrices();
    setTranslationsLoaded(true);
  }, []);

  const { t } = useTranslation();

  const cardsTrial = [
    <LessonCard
      title={t("title1_trial")}
      photo={card3}
      cost="€25"
      description={t("description1_trial")}
    />,
    <LessonCard
      title={t("title2_trial")}
      photo={card1}
      cost="€15 p.p"
      description={t("description2_trial")}
    />,
  ];
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
      cost="€145"
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
      cost="€37 p.p"
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
      cost="€350 p.p"
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
    <section css={sectionStyles} id="hours-and-prices" ref={ref}>
      <div css={innerStyles}>
        <div css={categoryStyles}>
          <header css={categoryHeaderStyles}>
            <span className="eyebrow">Sessions</span>
            <h2 css={categoryTitleStyles}>{t("gyrotonicLessons")}</h2>
            <p css={categoryDescStyles}>{t("gyrotonicDescription")}</p>
          </header>

          <div css={groupStyles}>
            <h3 css={groupTitleStyles}>{t("trialSessions")}</h3>
            <LessonDisplay cards={cardsTrial} />
          </div>

          <div css={groupStyles}>
            <h3 css={groupTitleStyles}>{t("individualSessions")}</h3>
            <LessonDisplay cards={cardsSingle} />
          </div>

          <div css={groupStyles}>
            <h3 css={groupTitleStyles}>{t("tandemSessions")}</h3>
            <LessonDisplay cards={cardsTandem} />
          </div>
        </div>

        <div css={categoryStyles}>
          <header css={categoryHeaderStyles}>
            <span className="eyebrow">Sessions</span>
            <h2 css={categoryTitleStyles}>{t("gyrokinesisLessons")}</h2>
            <p css={categoryDescStyles}>{t("gyrokinesisDescription")}</p>
          </header>

          <div css={groupStyles}>
            <h3 css={groupTitleStyles}>{t("groupSessions")}</h3>
            <LessonDisplay cards={cardsGroup} />
          </div>

          <div css={cancelStyles}>
            {t("cancellationPolicy")}
            <span css={cancelSignStyles}>— The Roots Team</span>
          </div>
        </div>
      </div>
    </section>
  );
}
