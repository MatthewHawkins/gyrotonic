/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

import image from '../assets/images/keep1.png';
import LessonCard from '../components/LessonCard';
import LessonDisplay from '../components/LessonDisplay';

export default function Lessons() {

  const hoursStyles = css`
  /* background-image: linear-gradient(rgba(255,255,255,.6),rgba(255,255,255,.6)), url(${image}); */
  background-color: #DFE0DE;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.15em;
  min-height: 90vh;
  `;

const infoStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Cormorant Garamond', serif;
  padding: 10px 30px 10px 10px;
  width: 100%;
  font-size: 1.15em;
`;

const hoursTitle = css`
    font-size: 3rem;
    position: relative;
`

const underlineStyles = css`
  ::before{
    content: '';
    position: absolute;
    height: 2px;
    width: 80px;
    background-color: #000000 !important;
    bottom: -2px;
}
 ::before{
    left: 0;
  }
`

const hoursText = css`
  font-size: 1.2em;
  font-weight: 500;
  text-align: center;
`

const cards = [
  <LessonCard title="New Client Trial Lessons" cost='$50' description='Come in for an introductory lesson, and get to know us!'/>,
  <LessonCard title="Three Lesson Package" cost='$135' description='Three class package which can be scheduled with us over times that work for you.'/>,
  <LessonCard title="Six Lesson Package" cost='$270' description='Six class package, ideal for individuals or couples, which can be schedules with us over times that work for you.'/>,
  <LessonCard title="Ten Lesson Package" cost='$450' description='Ten class package which can be schedules with us over times that work for you. Perfect for understanding the various movement sequences.'/>
];


  return (
    <div css={hoursStyles} id="hours-and-prices">
      <div css={infoStyles}>
        <h2 css={hoursTitle}>Lessons
          <span css={underlineStyles}/>
        </h2>
        <div css={hoursText}>
          Training dates can be chosen according to openings in the trainers' schedules. 
          <br></br>Registration is done by phone , e-mail or personally in the studio.
          <br></br>There are four training options:
        </div>
      <LessonDisplay cards={cards}/>
      </div>
    </div>
  )
}
