/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Monotype from '../assets/fonts/MTCORSVA.TTF'


import OurStudio from '../sections/OurStudio';
import Methodology from '../sections/Methodology';
import Equipment from '../sections/Equipment';
import Biography from '../sections/Biography';
import IconDisplay from '../components/IconDisplay';


export default function Homepage() {

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
  `;

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



  return (
    <div css={bodyStyles}>
      <OurStudio />
      <Methodology />
      <Equipment />
      <Biography />
    </div>
  )

  // <p css={[globalStyles, artofStyles]}>The Art of Exercising and Beyond&reg;</p>
}
