/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import React from 'react'

export default function IconCard( {imagePath, title, text} ) {

  const cardStyles = css`
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    flex: 0 0 25%;
    max-width: 25%;
    padding: 0 15px 0 15px;
  }
  @media (max-width: 768px){
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  @media (max-width: 576px){
    flex: 0 0 50%;
    max-width: 50%;
  }
  `

  const imageContainerStyles = css`
    display: flex;
    justify-content: center;
    width: 100%;
  `;

  const imageStyles = css`
    width: 4.5rem;
    margin-bottom: 1rem!important;
  `;

  const titleStyles = css`
    font-size: 1.5em;
    font-weight: 500;
    line-height: 1.2;
    text-align: center!important;
  `

  const textStyles = css`    
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: center!important;
  color: rgba(0, 0, 0, 0.5);
  `

  return (
    <div css={cardStyles}>
      <div css={imageContainerStyles}>
        <img src={imagePath} css={imageStyles}></img>
      </div>
      <div css={titleStyles}>
        {title}
      </div>
      <div css={textStyles}>
        {text}
      </div>
    </div>
  )
}
