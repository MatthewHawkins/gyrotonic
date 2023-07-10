/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import image1 from '../assets/images/DSC01967.jpg';
import image2 from '../assets/images/DSC01969.jpg';
import image3 from '../assets/images/DSC01970.jpg';
import image4 from '../assets/images/DSC01972.jpg';
import image5 from '../assets/images/DSC01973.jpg';
import image6 from '../assets/images/DSC01974.jpg';
import image7 from '../assets/images/DSC01923.png';
import image8 from '../assets/images/biography.png';


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
    background-color: 
    #E0E0E0;
    height: 230vh;
  `;
  

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
    flex-direction: row;
    width: 50%;
    font-family: 'Cormorant Garamond', serif;
    width: 60vw;
  `;


  const sectionOneTitle = css`
    font-size: 3rem;
    align-self: flex-start;
    padding-left: 5%;
    margin: 0px;
  `;

  const sectionOneText = css`
    font-size: 1.25em;
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
    width: 50%;
    font-family: 'Cormorant Garamond', serif;
    padding: 10px 30px 10px 10px;
    width: 60vw;
  `;

  const sectionTwoStyles = css`
  background-color: #F6F5E8;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 75vh;
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
    height: 100%;
    max-width: 45%;
  `

  const sectionThreeStyles = css`
  background-color: #F6F5E8;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 65vh;
  `;

  const sectionThreeTitle = css`
      font-size: 3rem;
  `

  const sectionThreeText = css`
    font-size: 1.25em;
  `

  const imageThreeStyles = css`
    padding-right: 30px;
    height: 100%;
  `
  




  return (
    <div css={bodyStyles}>
      <div css={sectionOneStyles} id="home">
        <div css={sectionOneLayout}>
          <h2 css={sectionOneTitle}>What is Gyrotonic</h2>
          <p css={sectionOneText}>Gyrotonic is a unique movement method that combines elements of yoga, dance, gymnastics, 
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
      {/* For Section Two, replace with methodology cards that can be cycled like Aesop perhaps? */}
      <div css={sectionTwoStyles} id="methodology">
        <img css={imageTwoStyles} src="https://uploads-ssl.webflow.com/60733786d388266ad78c4a2e/60733786d38826dc938c4b6b_Gyrotonic%20M%C3%BCnstertal%20Studio%20Robert%20Meggle.jpg"></img>
        <div css={introStyles}>
          <h2 css={sectionTwoTitle}>Methodology</h2>
          <div>At Roots, we pride ourselves on our unique and effective approach to teaching Gyrotonic. Our instructors are highly trained and experienced professionals who are dedicated to helping our clients achieve their fitness goals.                 
            <ol>
              <li>
              Client Assessment:
            Before beginning any Gyrotonic session, our instructors conduct a thorough client assessment. This assessment includes understanding the client's fitness level, any past injuries or limitations, and their specific goals and expectations. This information helps us tailor the sessions to meet the individual needs of each client and ensure their safety and progress.
              </li>
              <li>
              Individualized Programming:
            Based on the client assessment, our instructors create individualized programs that address the unique needs of each client. We believe that personalized programming is essential for achieving optimal results. Our instructors carefully select Gyrotonic exercises and sequences that will challenge and strengthen the client's body, while considering their abilities and limitations.
              </li>
              <li>
              Progressive Approach:
            We follow a progressive approach to teaching Gyrotonic. We start with the foundational exercises and gradually build upon them as the client's strength and proficiency improve. This approach allows clients to develop a solid foundation and gradually progress to more advanced movements, ensuring a safe and effective training experience.
              </li>
              <li>
              Mind-Body Connection:
            We emphasize the mind-body connection in our teaching methodologies. Our instructors guide clients to focus on their breath, body awareness, and proper alignment throughout each movement. By cultivating this connection, clients develop a deeper understanding of their bodies and enhance the effectiveness of their Gyrotonic practice.
              </li>
              <li>
              Hands-On Instruction:
            Our instructors provide hands-on guidance and corrections during Gyrotonic sessions. Through tactile cues and gentle adjustments, they help clients achieve proper form, alignment, and muscle engagement. This personalized attention ensures that clients get the most out of each exercise and helps prevent injuries.
              </li>
              <li>
              Functional Integration:
              We integrate functional movements into Gyrotonic sessions to enhance the applicability of the training to daily activities. By incorporating functional movements, such as reaching, twisting, and bending, we help clients improve their overall functional strength, flexibility, and coordination.
              </li>
            </ol>
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
        <img src={image7} css={imageThreeStyles}></img>
      </div>
      <div css={sectionThreeStyles} id="team">
        <img src={image8} css={imageThreeStyles}></img>
        <div css={introStyles}>
          <h2 css={sectionThreeTitle}>Biography</h2>
          <p css={sectionThreeText}>Ima let you guys tell me what to write here :)
          </p>
        </div>
      </div>
    </div>
  )
}
