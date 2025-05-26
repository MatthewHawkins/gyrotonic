/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";

import Gyrotonic from "../components/Gyrotonic";

import IconDisplay from "../components/IconDisplay";

import methodPicture from "../assets/images/method.jpeg";

import { useTranslation } from "react-i18next";
import { translateMethodology } from "../utlities/translations";

export default function Methodology() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    translateMethodology();
    setShowContent(true);
  }, []);

  const { t } = useTranslation();

  const sectionTwoStyles = css`
    background-color: var(--background-color-secondary);
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
      /* Chrome and Safari */
      display: none;
    }
    min-height: 90vh;
    opacity: ${showContent ? "1" : "0"};
    transition: opacity 2s ease;
  `;

  const introStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Cormorant Garamond", serif;
    padding: 1em 3em 1em 3em;
    width: 70vw;
    @media (max-width: 768px) {
      width: 90%;
    }
  `;

  const sectionTwoTitle = css`
    position: relative;
    font-size: var(--font-size-title);
  `;

  const underlineStyles = css`
    ::before {
      content: "";
      position: absolute;
      height: 2px;
      width: 110px;
      background-color: #000000;
      bottom: -2px;
      margin-left: 25%;
    }

    ::before {
      left: 0;
    }
  `;

  const imageTwoStyles = css`
    padding-right: 30px;
    height: 70%;
    max-width: 45%;
    width: 450px;
    padding-left: 100px;
    @media (max-width: 768px) {
      display: none;
    }
  `;

  const sectionTwoText = css`
    font-size: var(--font-size-regular);
    padding: 0 5%;
  `;
  return (
    <div css={sectionTwoStyles} id="methodology">
      <img css={imageTwoStyles} src={methodPicture} alt="Gyrotonic methodology demonstration - movement therapy in action" />
      <div css={introStyles}>
        <h2 css={sectionTwoTitle}>
          {t("methodTitle")}
          <span css={underlineStyles} />
        </h2>
        <div css={sectionTwoText}>
          <Gyrotonic />
          {t("method1")}
          <Gyrotonic text="GYROKINESIS" />
          {t("method2")} <Gyrotonic text="GYROTONIC EXPANSION SYSTEM" />,
          {t("method3")} <br />
          <br />
          {t("method4")} <br />
          <br />
          {t("method5")}
          <br />
          <br />
          <br />
          <br />
          {/* <ul>
          <li>Balances the mind, body and emotions</li>
          <li>Activates the center of the body and vitality</li>
          <li>Trains strength, flexibility and stretching at the same time</li>
          <li>Removes blockages and allows a free flow of energy</li>
          <li>Prevents injuries by balancing the body posture, rehabilitates injuries</li>
          <li>Releases stress and enhances regeneration</li>
          <li>Mobilizes and strengthens the spine </li>
        </ul> */}
          <IconDisplay />
        </div>
      </div>
    </div>
  );
}
