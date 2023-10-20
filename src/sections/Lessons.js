/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

import image from '../assets/images/keep1.png';
import LessonCard from '../components/LessonCard';

export default function Lessons() {

const infoStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Cormorant Garamond', serif;
  padding: 10px 30px 10px 10px;
  width: 100%;
  font-size: 1.15em;
`;

const hoursStyles = css`
background-image: linear-gradient(rgba(255,255,255,.6),rgba(255,255,255,.6)), url(${image});
background-image: linear-gradient(rgba(255,255,255,.6),rgba(255,255,255,.6));
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-attachment: fixed;
display: flex;
flex-direction: row;
align-items: center;
height: 85vh;
font-size: 1.15em;
`;

const hoursTitle = css`
    font-size: 3rem;
`

const hoursText = css`
  font-size: 1.2em;
  font-weight: 500;
`


  return (
    <div css={hoursStyles} id="hours-and-prices">
      <div css={infoStyles}>
        <h2 css={hoursTitle}>Prices</h2>
        <div css={hoursText}>
          Training dates can be chosen according to openings in the trainers' schedules.
          There are four training options:
          <ul>
            <li>Single lesson - €50</li>
            <li>Three Introductory Lessons - €135</li>
            <li>Six Lesson Package - €270</li>
            <li>Ten Lesson Package - €450</li>
          </ul>
          Registration is done by phone , e-mail or personally in the studio.
        </div>
      </div>
      <LessonCard title="New Client Trial Lessons" cost='$20' description='1 week unlimitted classes Flexible schedule 4-week series 10% off Vinyasa treatment'/>
    </div>
  )
}
