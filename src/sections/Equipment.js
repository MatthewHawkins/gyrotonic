/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

import methodPicture from '../assets/images/method.jpeg'

/* TODO */

export default function Equipment() {

  const introStyles = css`
    display: flex;
    flex-direction: column;
    font-family: 'Cormorant Garamond', serif;
    padding: 10px 30px 10px 10px;
    width: 60vw;
    @media (max-width: 768px){
    width: 90%;
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
      font-size: 3rem;
      margin-left: 5%;
      `

const sectionThreeText = css`
    font-size: 1.25em;
    margin-left: 5%;
    `
const imageThreeStyles = css`
  padding: 5em 3em 0 0;
  height: 650px;
  @media (max-width: 768px){
      display: none;
  }
`

const videoStyles = css`
padding: 1em;
`

  return (
    <div css={sectionThreeStyles} id="equipment">
        {/* <div css={introStyles}>
          <h2 css={sectionThreeTitle}>Equipment</h2>
          <p css={sectionThreeText}>The Gyrotonic machine is an essential component of our Gyrotonic studio at Roots. This innovative piece of equipment is specifically designed to facilitate a fluid and dynamic movement practice that promotes strength, flexibility, and overall body conditioning.
            Our studio features the Gyrotonic Pulley Tower Combination Unit, a versatile and sophisticated machine that serves as the centerpiece of our training sessions. This machine combines elements of the pulley tower and rotational discs, providing a comprehensive and multidimensional workout experience.
          </p>
        </div>
        <img src={methodPicture} css={imageThreeStyles}></img> */}
        <iframe css={videoStyles} width="854" height="480" src="https://www.youtube.com/embed/oE33mjnvRAc?si=GjE4nsgsxRy6bwBc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>
  )
}
