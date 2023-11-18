/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import image1 from '../assets/images/caro_1.jpeg';
import image2 from '../assets/images/caro_2.jpeg';
import image3 from '../assets/images/caro_3.jpeg';
import image4 from '../assets/images/caro_4.jpeg';
import image5 from '../assets/images/caro_5.jpeg';
import image6 from '../assets/images/caro_6.jpeg';

export default function OurStudio() {

  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

const sectionOneStyles = css`
  background-color: #DFE0DE;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: ${showContent ? '1' : '0'};
  transition: opacity 2s ease;
`;

const sectionOneLayout = css`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-family: 'Cormorant Garamond', serif;
  @media (max-width: 768px){
    width: 90%;
  }
`;


const sectionOneTitle = css`
  font-size: 3rem;
  position: relative;
  align-self: flex-start;
  padding-left: 5%;
  padding-bottom: 0.5rem;
`;

const underlineStyles = css`
  ::before{
    content: '';
    position: absolute;
    height: 2px;
    width: 110px;
    background-color: #000000;
    bottom: -2px;
    margin-left: 20%; 
  }

  ::before{
    left: 0;
  }
`

const sectionOneText = css`
  font-size: 1.25em;
  padding: 0 5%;
`

const sliderStyles = css`
  width: 50vw !important;
  height: 85% !important;
  margin: 20px;
  margin-top: -20px;
  padding: 40px 0 40px 0;

  .awssld__bullets{
    bottom: -10px !important;
  }

  @media (max-width: 768px){
      display: none;
  }
`;


  return (
    <div css={sectionOneStyles}>
      <div css={sectionOneLayout}>
        <h2 css={sectionOneTitle}>Our Studio
        <span css={underlineStyles}/>
        </h2>
        <p css={sectionOneText}>

        <b>The Roots Studio</b> was born from the meeting of two dancers who discovered Gyrotonic, 
        a transformative method that significantly impacted their lives. Gyrotonic, known 
        for its circular and fluid movements, helped them alleviate back problems that had 
        troubled them for years. Thus, the studio was founded with the aim of raising awareness 
        about this revolutionary yet lesser-known method. The name "Roots" emphasizes the foundational nature of 
        the Gyrotonic method, signifying a return to the core, both physically and metaphorically, 
        fostering a sense of grounding, strength, and growth for those who engage in the practice.
        By sharing their own experience, and the benefits they gained from Gyrotonic, the founders hope to 
        introduce more people to this transformative practice and its potential to improve physical well-being.
        </p>
      </div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
        css={sliderStyles}
      >
        <div data-src={image1}></div>
        <div data-src={image2}></div>
        <div data-src={image3}></div>
        <div data-src={image4}></div>
        <div data-src={image5}></div>
        <div data-src={image6}></div>
      </AutoplaySlider>
    </div>
  )
}
