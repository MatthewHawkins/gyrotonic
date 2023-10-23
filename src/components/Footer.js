/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React, { useState, useEffect } from 'react';

import gyroLogo from '../assets/images/gyrotonic_sb.png'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function () {


  const mainStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #F6F5E8;
  min-height: 30vh;
  `;

  const logoContainerStyles = css`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 10px 0 10px 0;
  `;

  const logoStyles = css`
    height:100px;
    width:100px;
  ` ;
  const infoStyles = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const iconDisplayStyles = css`
  display: flex;
  gap: 25px;
  `

  const iconStyles = css`
  color: #333;
  transition: color 0.5s;

  :hover{
  color: #999;
  }
  `;


  return (
    <div css={mainStyles}>
      <div css={infoStyles}>
      <img src={gyroLogo} css={logoStyles}></img>
        <p><b>GYROTONIC®, GYROTONIC® & Logo, <br></br>GYROTONIC EXPANSION SYSTEM®, The Art of Exercising and Beyond</b> &reg; <br></br> are registered trademarks and are trademarks of Gyrotonic Sales Corp.</p>
        <div css={iconDisplayStyles}>
        <FacebookIcon css={iconStyles}/>
        <InstagramIcon css={iconStyles}/>
        <TwitterIcon css={iconStyles}/>
      </div>
      </div>
      <div css={logoContainerStyles}>
      </div>
    </div>
  )
}
