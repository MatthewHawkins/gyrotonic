/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

import methodPicture from '../assets/images/method.jpeg'

export default function LessonCard({ title, cost, description}) {

  const cardStyles = css`


min-height: 50vh;
padding: 10px;
gap: 20px;
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: #F6F5E8;

text-align: center;

background-size: cover;
background-repeat: no-repeat;
background-position: center;
transition: 0.5s ease-in-out background-image;

box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media (min-width: 576px){
      flex: 0 0 90%;
      max-width: 100%;
    }

    @media (min-width: 768px){
      flex: 0 0 40%;
      max-width: 40%;
    }
    
    @media (min-width: 1200px){
      flex: 0 0 15%;
      max-width: 25%;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(rgba(255,255,255,.8),rgba(255,255,255,.8)), url(${methodPicture});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      opacity: 0;
      transition: opacity 0.5s ease;
      z-index: 1;
    }

    h3, h2, p {
      position: relative;
      z-index: 2;
    }

    h3{
      margin-top: 50px;
    }

    &:hover::before {
      opacity: 1;
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
