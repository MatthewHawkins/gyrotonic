/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import React from 'react'

import fede from '../assets/images/fede.png'
import nico from '../assets/images/nico-modified.png'

export default function Biography() {

  const introStyles = css`
    display: flex;
    flex-direction: column;
    font-family: 'Cormorant Garamond', serif;
    padding: 10px 30px 10px 10px;
    width: 80%;
  `;

const sectionFourStyles = css`
background-color: var(--background-color-primary);
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
`;
  
const sectionThreeTitle = css`
  position: relative;
font-size: 3rem;
margin-left: 5%;
`
const underlineStyles = css`

  ::before{
    content: '';
    position: absolute;
    height: 2px;
    width: 110px;
    background-color: #000000;
    bottom: -2px;
    /* margin-left: 20px; */
  }

  ::before{
    left: 0;
  }
`

const sectionThreeText = css`
font-size: 1.45em;
margin-left: 5%;
`

const bioStyles = css`
display: flex;
justify-content: space-between;
width: 100% !important;
gap: 50px;
flex: 1;
@media (max-width: 768px){
    flex-direction: column;
    align-items: center;
}

& > div {
  width : 50%;
  @media (max-width: 768px){
      width: 90%;
  }
}
`
const headshotStyles = css`
border-radius: 50%;
height: 320px;
width: 315px;
`;


  return (
    <div css={sectionFourStyles} id="team">
        <div css={introStyles}>
            <h2 css={sectionThreeTitle}>About Us
              <span css={underlineStyles} />
            </h2>
          <div css={bioStyles}>
            <div>
              <img src={fede} css={headshotStyles}></img>
              <p css={sectionThreeText}>Federico Moiana comes originally from Lugano, Switzerland. At an early age he began his training as a competitive gymnast , which led him to dance, and eventually his GYROTONIC® training. Federico’s love for dance was continued and refined at the ballet school of La Scala in Milan followed by the John Cranko School in Stuttgart from which he received his diploma . He danced as professional ballet dancer in various theaters : 2014/15 Mecklenburgische Staatstheater in Schwerin, 2015/2021 Tiroler Landestheater in Innsbruck, currently working at the Saarländisches Staatstheater in Saarbrücken. Since 2021 he is teaching ballet at Hermann Neuberger Sportschule for the female artistic gymnastic team.
                Through teaching and studying GYROTONIC® his understanding of the body was greatly deepened, and he finds joy in seeing how it helps his clients both physically and emotionally.</p>
            </div>
            <div>
              <img src={nico} css={headshotStyles}></img>
              <p css={sectionThreeText}>Nicola Strada is a dedicated Gyrotonic teacher with a background in dance and a passion for promoting holistic wellness and fitness through the Gyrotonic method. He is currently a faculty member at the Platform Studio in Saarbrücken. Leveraging training from the Accademia Teatro alla Scala in Milan, and experience with renowned dance companies like Bavarian State Ballet and Saarland State Ballet, he aims to inspire individuals to achieve physical strength, flexibility, and overall well-being.  It makes him grateful to know that his teaching would be able to help better someone's health.</p>
            </div>
          </div>
        </div>
      </div>
  )
}
