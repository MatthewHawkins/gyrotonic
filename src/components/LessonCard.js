/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

import methodPicture from '../assets/images/method.jpeg'

export default function LessonCard({ title, cost, description}) {

  const cardStyles = css`

    margin-bottom: 1.5rem!important;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    /* width: 100%; */
    padding-right: 15px;
    padding-left: 15px;
    height: 40vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    @media (min-width: 992px){
      flex: 0 0 25%;
      max-width: 25%;
    }
    
    @media (max-width: 768px){
      flex: 0 0 50%;
      max-width: 50%;
    }

    &:hover{
      background-image: linear-gradient(rgba(255,255,255,.6),rgba(255,255,255,.6)), url(${methodPicture});
    }

  `


  return (
    <div css={cardStyles}>
      <h3>{title}</h3>
      <h2>{cost}</h2>
      <p>{description}</p>
    </div>
  )
}
