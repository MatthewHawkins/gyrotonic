/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect } from "react";

import IconCard from "./IconCard";

import stones from "../assets/icons/stones.png";
import exercise from "../assets/icons/exercise.png";
import lotus from "../assets/icons/lotus.png";

import { useTranslation } from "react-i18next";
import { translateIconSection } from "../utlities/translations";

export default function IconDisplay() {
  const { t } = useTranslation();

  useEffect(() => {
    translateIconSection();
  }, []);

  const displayStyles = css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--space-5);
  `;

  return (
    <div css={displayStyles}>
      <IconCard
        imagePath={stones}
        title={t("title1")}
        text={t("desc1")}
        imageAlt="Balance stones representing stability and harmony in Gyrotonic practice"
      />
      <IconCard
        imagePath={exercise}
        title={t("title2")}
        text={t("desc2")}
        imageAlt="Exercise icon representing strength and movement in Gyrotonic training"
      />
      <IconCard
        imagePath={lotus}
        title={t("title3")}
        text={t("desc3")}
        imageAlt="Lotus flower representing mindfulness and flexibility in Gyrotonic practice"
      />
    </div>
  );
}
