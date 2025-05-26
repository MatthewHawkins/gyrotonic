/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import methodPicture from "../assets/images/method.jpeg";

/* TODO */

export default function Equipment() {
  const introStyles = css`
    display: flex;
    flex-direction: column;
    font-family: "Cormorant Garamond", serif;
    padding: 10px 30px 10px 10px;
    @media (max-width: 768px) {
      width: 85vw;
    }
  `;
  const sectionThreeStyles = css`
    background-color: var(--background-color-primary);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;
  const sectionThreeTitle = css`
    font-size: var(--font-size-title);
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
    font-size: 1.25em;
    margin-left: 5%;
  `;
  const imageThreeStyles = css`
    padding: 5em 3em 0 0;
    height: 650px;
    @media (max-width: 768px) {
      display: none;
    }
  `;

  const videoStyles = css`
    padding: 1em;
    width: 854px;
    @media (max-width: 768px) {
      width: 100%;
    }
  `;

  const videoSectionStyles = css`
    display: flex;
    justify-content: space-around;
    width: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  `;

  return (
    <div css={introStyles} id="equipment">
      <h2 css={sectionThreeTitle}>
        Videos
        <span css={underlineStyles} />
      </h2>
      {/* <div css={introStyles}>
          <p css={sectionThreeText}>The Gyrotonic machine is an essential component of our Gyrotonic studio at Roots. This innovative piece of equipment is specifically designed to facilitate a fluid and dynamic movement practice that promotes strength, flexibility, and overall body conditioning.
            Our studio features the Gyrotonic Pulley Tower Combination Unit, a versatile and sophisticated machine that serves as the centerpiece of our training sessions. This machine combines elements of the pulley tower and rotational discs, providing a comprehensive and multidimensional workout experience.
          </p>
        </div>
        <img src={methodPicture} css={imageThreeStyles}></img> */}
      <div css={videoSectionStyles}>
        <iframe
          css={videoStyles}
          width="854"
          height="480"
          src="https://www.youtube.com/embed/oE33mjnvRAc?si=GjE4nsgsxRy6bwBc"
          title="Gyrotonic equipment demonstration - specialized movement therapy machines"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          css={videoStyles}
          width="854"
          height="480"
          src="https://www.youtube.com/embed/wXYQIwas0GE"
          title="Gyrotonic exercise demonstration - movement therapy techniques"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
