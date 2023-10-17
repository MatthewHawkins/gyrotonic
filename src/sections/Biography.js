/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import React from 'react'

import fede from '../assets/images/fede.png'
import nico from '../assets/images/nico.png'

export default function Biography() {

  const introStyles = css`
    display: flex;
    flex-direction: column;
    font-family: 'Cormorant Garamond', serif;
    padding: 10px 30px 10px 10px;
    width: 60vw;
  `;

const sectionFourStyles = css`
background-color: #F6F5E8;
display: flex;
flex-direction: column;
align-items: center;
min-height: 100vh;
`;
  
const sectionThreeTitle = css`
font-size: 3rem;
margin-left: 5%;
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
`
const headshotStyles = css`
border-radius: 50%;
height: 320px;
width: 315px;
`;


  return (
    <div css={sectionFourStyles} id="team">

        <div css={introStyles} style={{ width: '80%' }}>
          <h2 css={sectionThreeTitle}>About Us</h2>
          <div css={bioStyles}>
            <div css={css`width: 50%;`}>
              <img src={fede} css={headshotStyles}></img>
              <p css={sectionThreeText}>Federico Moiana comes originally from Lugano, Switzerland. At an early age he began his training as a competitive gymnast , which led him to dance, and eventually his GYROTONIC® training. Federico’s love for dance was continued and refined at the ballet school of La Scala in Milan followed by the John Cranko School in Stuttgart from which he received his diploma . He danced as professional ballet dancer in various theaters : 2014/15 Mecklenburgische Staatstheater in Schwerin, 2015/2021 Tiroler Landestheater in Innsbruck, currently working at the Saarländisches Staatstheater in Saarbrücken. Since 2021 he is teaching ballet at Hermann Neuberger Sportschule for the female artistic gymnastic team.
                Through teaching and studying GYROTONIC® his understanding of the body was greatly deepened, and he finds joy in seeing how it helps his clients both physically and emotionally. It makes him grateful to know that his teaching would be able to help better someone's health.</p>
            </div>
            <div css={css`width: 50%;`}>
              <img src={nico} css={headshotStyles}></img>
              <p css={sectionThreeText}>Dedicated Gyrotonic teacher with a background in dance and a passion for promoting holistic wellness and fitness through the Gyrotonic method. Leveraging training from the Accademia Teatro alla Scala in Milan and experience with renowned dance companies like Bavarian State Ballet and Saarland State Ballet, I aim to inspire individuals to achieve physical strength, flexibility, and overall well-being.</p>
            </div>
          </div>
        </div>
      </div>
  )
}
