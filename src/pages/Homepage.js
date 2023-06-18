/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import image1 from '../assets/images/DSC01967.jpg';
import image2 from '../assets/images/DSC01969.jpg';
import image3 from '../assets/images/DSC01970.jpg';
import image4 from '../assets/images/DSC01972.jpg';
import image5 from '../assets/images/DSC01973.jpg';
import image6 from '../assets/images/DSC01974.jpg';


const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Homepage() {

  const bodyStyles = css`
  background-color: 
  /* #CEC3B5; */
   #E0E0E0;
  /* #292726; */
  /* #91A38B; */
  
  height: 230vh;
`;
  
  const sectionOneStyles = css`
  background-color: #CEC3B5;
  display: flex;
  flex-direction: row;
  height: 60vh;
`;
  
  const sectionTwoStyles = css`
  background-color: #F6F5E8;
  display: flex;
  flex-direction: row;
  height: 60vh;
`;

  const introStyles = css`
    width: 50%;
    font-family: Arial, Helvetica, sans-serif;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding: 10px 30px 10px 10px;
    width: 60vw;
  `;
  
  const titleStyles = css`
  `;

  const sliderStyles = css`
  width: 50vw !important;
  height: 90% !important;
  margin: 10px;
  `;



  return (
    <div css={bodyStyles}>
      <div css={sectionOneStyles}>
        <div css={introStyles}>
          <h2>Title</h2>
          <p>Gyrotonic is a training system that combines fluid movements, breathing control and choreographed sequences to improve strength, flexibility, balance and body awareness.
            Developed in the 1980s by Romanian dancer Juliu Horvath, Gyrotonic integrates the principles of dance, yoga, Tai Chi, and swimming to create a unique approach to working out the body.
            The Gyrotonic is based on a specific device called the "Gyrotonic Expansion System", made up of pulleys, cables and mobile platforms which provide resistance and support for the body during movements.</p>
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
      <div css={sectionTwoStyles}>
        
      </div>
      <div>

      </div>
    </div>
  )
}
