/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

export default function LessonDisplay( {cards} ) {

  const displayStyles = css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-right: 15px;
    padding-left: 15px;
    margin: 3em 0;
    gap: 2em;
    height: auto;
  `;

  return (
    <div css={displayStyles}>
      {cards}
    </div>
  )
}
