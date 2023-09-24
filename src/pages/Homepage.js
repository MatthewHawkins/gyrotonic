/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import image1 from '../assets/images/caro_1.jpeg';
import image2 from '../assets/images/caro_2.jpeg';
import image3 from '../assets/images/caro_3.jpeg';
import image4 from '../assets/images/caro_4.jpeg';
import image5 from '../assets/images/caro_5.jpeg';
import image6 from '../assets/images/caro_6.jpeg';
import image9 from '../assets/images/keep1.png'
import logo2 from '../assets/images/2017-Logo-PNG-Transparent-Backround.png';
import Gyrotonic from '../components/Gyrotonic';
import Monotype from '../assets/fonts/MTCORSVA.TTF'
import methodPicture from '../assets/images/method.jpeg'

import fede from '../assets/images/fede.png'
import nico from '../assets/images/nico.png'


const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Homepage() {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const bodyStyles = css`
    background-color: #E0E0E0;
    width: 100%;
  `;


  const sectionOneContainer = css`
    background-color: #f0e6da;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 100%;
  `;

  const headshotStyles = css`
  border-radius: 50%;
  height: 350px;
  width: 315px;
`
  const logoStyles = css`
  margin-top: 20px;
  width: 150px;
  height: 150px;
  margin-left: 45%;
`

  const sectionOneStyles = css`
    background-color: #f0e6da;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 75vh;
    opacity: ${showContent ? '1' : '0'};
    transition: opacity 2s ease;
  `;

  const sectionOneLayout = css`
    display: flex;
    flex-direction: column;
    width: 50%;
    font-family: 'Cormorant Garamond', serif;
    /* width: 60vw; */
    max-height: 75vh;
    overflow: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar{ /* Chrome and Safari */
  display: none;
 } 
 `;


const sectionOneTitle = css`
    font-size: 3rem;
    align-self: flex-start;
    padding-left: 5%;
    margin: 0px;
    `;

  const sectionOneText = css`
    font-size: 1.45em;
    padding: 0 5%;
    `

const sliderStyles = css`
    width: 50vw !important;
    height: 85% !important;
    margin: 10px;
    margin-top: -10px;
    `;

const introStyles = css`
    display: flex;
    flex-direction: column;
    font-family: 'Cormorant Garamond', serif;
    padding: 10px 30px 10px 10px;
    width: 60vw;
  `;

  const sectionTwoStyles = css`
  background-color: #F6F5E8;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  overflow: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar{ /* Chrome and Safari */
  display: none;
}
opacity: ${showContent ? '1' : '0'};
transition: opacity 2s ease;
`;

const sectionTwoTitle = css`
      font-size: 3rem;
      `

const sectionTwoText = css`
    font-size: 1.25em;
    `

const imageTwoStyles = css`
    padding-right: 30px;
    height: 70%;
    max-width: 45%;
    width: 450px;
    padding-left: 100px;
    `

const sectionThreeStyles = css`
  background-color: #F6F5E8;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
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
      `

const sectionThreeText = css`
    font-size: 1.25em;
    `

const imageThreeStyles = css`
    padding-right: 30px;
    height: 70%;
    `

const globalStyles = css`
  @font-face {
    font-family: 'CustomFont';
    src: url(${Monotype}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  `;


const artofStyles = css`
    font-weight: bold;
    font-family: 'CustomFont', sans-serif;
    `

  const bioStyles = css`
    display: flex;
    justify-content: space-between;
    width: 100% !important;
    gap: 50px;
    flex: 1;
    `



  return (
    <div css={bodyStyles}>
      <div css={sectionOneContainer}>
        <div css={sectionOneStyles} id="home">
          <div css={sectionOneLayout}>
            <h2 css={sectionOneTitle}>Our Studio</h2>
            <p css={sectionOneText}>

              <Gyrotonic /> is a unique movement method that combines elements of yoga, dance, gymnastics,
              tai chi, and swimming. It was created by Juliu Horvath, a former ballet dancer, in the 1980s.
              Gyrotonic exercises are performed on specialized equipment, such as the Gyrotonic Expansion System,
              which consists of a pulley tower combination unit and rotational discs. These machines are designed to support
              and enhance the movement patterns of the human body.<br></br><br></br>
              The Gyrotonic method emphasizes flowing, circular, and spiraling movements that aim to
              increase strength, flexibility, and coordination. It focuses on the body's natural movement
              patterns and seeks to promote a sense of balance, freedom, and alignment.
              Gyrotonic is suitable for people of various fitness levels, ages, and body types. It can be
              used for general fitness, rehabilitation, and performance enhancement. The method is often practiced
              in specialized Gyrotonic studios under the guidance of certified instructors who provide individualized instruction and support.
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
      </div>
      {/* For Section Two, replace with methodology cards that can be cycled like Aesop perhaps? */}
      <div css={sectionTwoStyles} id="methodology">
        <img css={imageTwoStyles} src={methodPicture}></img>
        <div css={introStyles}>
          <h2 css={sectionTwoTitle}>Methodology</h2>
          <div css={sectionOneText}>
            <Gyrotonic /> is a unique movement method that combines elements of yoga, dance, gymnastics,
            tai chi, and swimming. It was created by Juliu Horvath, a former ballet dancer, in the 1980s.
            Gyrotonic exercises are performed on specialized equipment, such as the Gyrotonic Expansion System,
            which consists of a pulley tower combination unit and rotational discs. These machines are designed to support
            and enhance the movement patterns of the human body.<br></br><br></br>
            The Gyrotonic method emphasizes flowing, circular, and spiraling movements that aim to
            increase strength, flexibility, and coordination. It focuses on the body's natural movement
            patterns and seeks to promote a sense of balance, freedom, and alignment.
            Gyrotonic is suitable for people of various fitness levels, ages, and body types. It can be
            used for general fitness, rehabilitation, and performance enhancement. The method is often practiced
            in specialized Gyrotonic studios under the guidance of certified instructors who provide individualized instruction and support.

            The effects of Gyrotonic Training:
            <ul>
              <li>Balances the mind, body and emotions</li>
              <li>Activates the center of the body and vitality</li>
              <li>Trains strength, flexibility and stretching at the same time</li>
              <li>Removes blockages and allows a free flow of energy</li>
              <li>Prevents injuries by balancing the body posture, rehabilitates injuries</li>
              <li>Releases stress and enhances regeneration</li>
              <li>Mobilizes and strengthens the spine </li>
            </ul>
            {/* <ol>
              <li>
              <b>Client Assessment</b>:
            Before beginning any Gyrotonic session, our instructors conduct a thorough client assessment. This assessment includes understanding the client's fitness level, any past injuries or limitations, and their specific goals and expectations. This information helps us tailor the sessions to meet the individual needs of each client and ensure their safety and progress.
              </li>
              <li>
              <b>Individualized Programming</b>:
            Based on the client assessment, our instructors create individualized programs that address the unique needs of each client. We believe that personalized programming is essential for achieving optimal results. Our instructors carefully select Gyrotonic exercises and sequences that will challenge and strengthen the client's body, while considering their abilities and limitations.
              </li>
              <li>
              <b>Progressive Approach</b>:
            We follow a progressive approach to teaching Gyrotonic. We start with the foundational exercises and gradually build upon them as the client's strength and proficiency improve. This approach allows clients to develop a solid foundation and gradually progress to more advanced movements, ensuring a safe and effective training experience.
              </li>
              <li>
              <b>Mind-Body Connection</b>:
            We emphasize the mind-body connection in our teaching methodologies. Our instructors guide clients to focus on their breath, body awareness, and proper alignment throughout each movement. By cultivating this connection, clients develop a deeper understanding of their bodies and enhance the effectiveness of their Gyrotonic practice.
              </li>
              <li>
              <b>Hands-On Instruction</b>:
            Our instructors provide hands-on guidance and corrections during Gyrotonic sessions. Through tactile cues and gentle adjustments, they help clients achieve proper form, alignment, and muscle engagement. This personalized attention ensures that clients get the most out of each exercise and helps prevent injuries.
              </li>
              <li>
              <b>Functional Integration</b>:
              We integrate functional movements into Gyrotonic sessions to enhance the applicability of the training to daily activities. By incorporating functional movements, such as reaching, twisting, and bending, we help clients improve their overall functional strength, flexibility, and coordination.
              </li>
            </ol> */}
            <br></br>
            <img src={logo2} css={logoStyles}></img>
            <p css={[globalStyles, artofStyles]}>The Art of Exercising and Beyond&reg;</p>

          </div>
        </div>
      </div>
      <div css={sectionThreeStyles} id="equipment">
        <div css={introStyles}>
          <h2 css={sectionThreeTitle}>Equipment</h2>
          <p css={sectionThreeText}>The Gyrotonic machine is an essential component of our Gyrotonic studio at Roots. This innovative piece of equipment is specifically designed to facilitate a fluid and dynamic movement practice that promotes strength, flexibility, and overall body conditioning.
            Our studio features the Gyrotonic Pulley Tower Combination Unit, a versatile and sophisticated machine that serves as the centerpiece of our training sessions. This machine combines elements of the pulley tower and rotational discs, providing a comprehensive and multidimensional workout experience.
          </p>
        </div>
        <img src={image9} css={imageThreeStyles}></img>
      </div>
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
    </div>
  )
}
