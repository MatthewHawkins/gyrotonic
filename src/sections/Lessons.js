/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

import image from '../assets/images/keep1.png';
import LessonCard from '../components/LessonCard';
import LessonDisplay from '../components/LessonDisplay';

import card1 from '../assets/images/hallowin.jpeg'
import card2 from '../assets/images/tricep-man.jpeg'
import card3 from '../assets/images/smile.jpeg'
import card4 from '../assets/images/worth.jpeg'


export default function Lessons() {

  const hoursStyles = css`
  /* background-image: linear-gradient(rgba(255,255,255,.6),rgba(255,255,255,.6)), url(${image}); */
  background-color: var(--background-color-primary);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.15em;
  min-height: 100vh;
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
    width: 160px;
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
  text-align: left;
`

const cancelText = css`
  font-size: 1em;
  font-weight: 500;
  text-align: left;
  margin: 1em 5em;
`

  const sectionThreeTitle = css`
  font-size: 2.25rem;
  margin-left: 5%;
  margin-top: 2.25em;
  margin-bottom: -1em;
`

  const cardsSingle = [
    <LessonCard title="One Person Session (60 min)" photo={card1} cost='€55' description='Experience personalized guidance in a private gyrotonic session, tailored to your individual needs for strength, flexibility, and overall well-being.' />,
    <LessonCard title="Three Session Intro Package" photo={card4} cost='€130' description='Discover the fundamentals of the Gyrotonic Method with three private sessions. Explore its unique movement patterns, breathwork techniques, and holistic approach to building strength, improving flexibility, and enhancing mind-body connection.' />,
    <LessonCard title="Ten Session Mastery Package " photo={card2} cost='€500' description='Immerse yourself in the transformative power of the Gyrotonic Method with a ten-session series. This package offers the consistency needed to master the method’s flowing movements, synchronized breathwork, and core-strengthening techniques.' />,
  ];
  const cardsTandem = [
    <LessonCard title="Two Person Session (60 min)" photo={card3} cost='€35 p.p' description='Share the Gyrotonic Method with a friend or partner in a private tandem session.' />,
    <LessonCard title="Three Session Intro Package" photo={card2} cost='€100 p.p' description='Explore the foundations of the Gyrotonic Method as a pair with three tandem sessions. Learn the basics of breathwork, flowing movements, and partner coordination, creating a shared path to strength and balance.' />,
    <LessonCard title="Ten Session Flow Package " photo={card1} cost='€320 p.p' description='Embark on a shared journey with ten tandem sessions, immersing yourselves in the flowing movements and mindful techniques of the Gyrotonic Method. Build a deeper connection to the practice while fostering coordination, balance, and overall well-being together.' />
  ];
  const cardsGroup = [
    <LessonCard title="Group Training Session (60 min)" photo={card4} cost='€18 p.p' description='Experience the fluid and holistic movements of Gyrokinesis training in a dynamic group setting. This class focuses on rhythmic sequences performed on a mat and chair, integrating breathwork and spiraling motions to improve spinal posture, mobility, and overall vitality. Perfect for all levels, this session encourages a mindful connection between body and mind.' />,
    <LessonCard title="Ten Session Flow Package " photo={card3} cost='€160 p.p' description='Immerse yourself in the transformative practice of Gyrokinesis training with a ten-session package. In a supportive group environment, explore rhythmic sequences, breathwork, and flowing movements designed to enhance spinal posture, mobility, and energy. Build consistency in your practice and deepen your connection to this holistic method.' />
  ];


  return (
    <div css={hoursStyles} id="hours-and-prices">
      <div css={infoStyles}>
        <h2 css={hoursTitle}>Gyrotonic Lessons
          {/* <span css={underlineStyles} /> */}
        </h2>
        <div css={hoursText}>
          Training dates can be chosen according to openings in the trainers' schedules.
          <br></br>Registration is done by phone , e-mail or personally in the studio.
          <br></br>We offer several packages for individuals and tandem training:
        </div>

        <h2 css={sectionThreeTitle}>Individial Sessions
          {/* <span css={underlineStyles} /> */}
        </h2>
        <LessonDisplay cards={cardsSingle} />

        <h2 css={sectionThreeTitle}>Tandem Sessions
          {/* <span css={underlineStyles} /> */}
        </h2>
        <LessonDisplay cards={cardsTandem} />
      </div>
      
      
      <div css={infoStyles}>
        <h2 css={hoursTitle}>Gyrokinesis Lessons
          {/* <span css={underlineStyles} /> */}
        </h2>
        <div css={hoursText}>
          Gyrokinesis groups can be done in our studio, or in other spaces used for fitness activities. <br />
          If you're interested in booking workshops or other wellness events, please reach out via email.
          <br></br>Gyrokinesis classes are offered in groups, with a minimum size of 3 people:
        </div>

        <h2 css={sectionThreeTitle}>Group Sessions
          {/* <span css={underlineStyles} /> */}
        </h2>
        <LessonDisplay cards={cardsGroup} />
      <div css={cancelText}>
      *We kindly request at least 24 hours' notice for any cancellations or rescheduling. <br /> Sessions canceled with less than 24 hours' notice will be charged in full. <br /> Thank you for your understanding and cooperation 
      <br /> - <b>The Roots Team</b>.
      </div>
      </div>
    </div>
  )
}
