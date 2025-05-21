/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react';
// import image from '../assets/images/image2.png';
import image from '../assets/images/hallowin.jpeg';
// import logo from '../assets/images/logo-new.png';
import logo from '../assets/images/gyro-logo-redo.png';

const containerStyles = css`
  height: calc(105vh);
  overflow: hidden;
  position: relative;
  /* margin-top: -100px; */
`;

const backgroundStyles = css`
  background-image: linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url(${image}); /* Set your image path */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  `;

const contentStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
  z-index: 1;

`;
  
const imgStyles = css`
  @media (max-width: 768px){
    width: 100%;
  }
`;


export default function TopSection() {

  // const backgroundRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      setScrollPosition(scrollValue);
      const background = document.querySelector('.background-image');
      if (background) {
        background.style.backgroundPosition = `center ${scrollValue * 0.5}px`; // Adjust the multiplier for parallax effect
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div css={containerStyles} id='home'>
      <div
        css={backgroundStyles}
        className="background-image"
      ></div>
      <div css={contentStyles} className="content">
        <img css={imgStyles} src={logo}></img>
      </div>
    </div>
  );
};
