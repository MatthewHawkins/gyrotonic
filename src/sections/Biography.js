/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useEffect, useState } from 'react';

import fede from "../assets/images/fede.png";
import nico from "../assets/images/nico-modified.png";

import { useTranslation } from 'react-i18next';
import { translateBiography } from '../utlities/translations';


export default function Biography() {
  
  const { t } = useTranslation();
  const [translationsLoaded, setTranslationsLoaded] = useState(false);
  
  useEffect(() => {
    translateBiography()
    setTranslationsLoaded(true); // Force re-render after adding translations
  }, []);


  const introStyles = css`
    display: flex;
    flex-direction: column;
    font-family: "Cormorant Garamond", serif;
    padding: 10px 30px 10px 10px;
    width: 80%;
  `;

  const sectionFourStyles = css`
    background-color: var(--background-color-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  `;

  const sectionThreeTitle = css`
    position: relative;
    font-size: 3rem;
    margin-left: 5%;
  `;
  const underlineStyles = css`
    ::before {
      content: "";
      position: absolute;
      height: 2px;
      width: 110px;
      background-color: #000000;
      bottom: -2px;
      /* margin-left: 20px; */
    }

    ::before {
      left: 0;
    }
  `;

  const sectionThreeText = css`
    font-size: 1.45em;
    margin-left: 5%;
  `;

  const bioStyles = css`
    display: flex;
    justify-content: space-between;
    width: 100% !important;
    gap: 50px;
    flex: 1;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    & > div {
      width: 50%;
      @media (max-width: 768px) {
        width: 90%;
      }
    }
  `;
  const headshotStyles = css`
    border-radius: 50%;
    height: 320px;
    width: 315px;
  `;

  const quoteStyles = css`
    font-size: 2em;
    font-family: "Cormorant Garamond", serif;
    font-weight: bold;
  `;

  return (
    <div css={sectionFourStyles} id="team">
      <div css={introStyles}>
        <h2 css={sectionThreeTitle}>
        {t('bioTitle')}
          <span css={underlineStyles} />
        </h2>
        <div css={bioStyles}>
          <div>
            <img src={fede} css={headshotStyles}></img>
            <p css={sectionThreeText}>
            {t('fede')}
            </p>
          </div>
          <div>
            <img src={nico} css={headshotStyles}></img>
            <p css={sectionThreeText}>
            {t('nico')}
            </p>
          </div>
        </div>
      </div>
      <div css={quoteStyles}>"Redefine the way you move"</div>
    </div>
  );
}
