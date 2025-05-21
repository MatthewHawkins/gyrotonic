/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React, { useState, useEffect } from 'react';

import gyroLogo from '../assets/images/logo_small.png'
import gyroLogo2 from '../assets/images/gyroLogo2.png'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';

export default function () {


  const mainStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--background-color-secondary);
  min-height: 30vh;
  padding: 0 1em;

  `;

  const logoContainerStyles = css`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 10px 0 10px 0;
  `;

  const logoStyles = css`
    height: 130px;
    width: 130px;
  ` ;

  const col1Styles = css`
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    margin-top: 1em;
  `


  const infoStyles = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
      @media (max-width: 768px){
    flex-direction: column;
  }
  `;

  const iconDisplayStyles = css`
  display: flex;
  gap: 25px;
  `

  const iconStyles = css`
  color: #333;
  transition: color 0.5s;

  :visited{
    color: #333;
  }

  :hover{
  color: #999;
  }
  `;


  return (
    <div css={mainStyles}>
      <div css={infoStyles}>
        <img src={gyroLogo2} css={logoStyles}></img>
      <div css={col1Styles}>
        <p><b>GYROTONIC®, GYROTONIC® Logo</b>, <b>GYROTONIC EXPANSION SYSTEM®</b>, and <b>GYROKINESIS®</b> 
        <br></br> are registered trademarks and are trademarks of Gyrotonic Sales Corp and are used with their permission.</p>
      </div>
        <p>
          <br></br><br></br>
          Icons from MaterialIcon and <a href='flaticon.com'>FlatIcon</a>
          <br></br><br></br>
          Photos and videos by Colin Jacobs
          <br></br><br></br>
          <Link css={iconStyles} to='/data-security'>Data Protection Declaration</Link></p>

        <div css={iconDisplayStyles}>
        <Link target='_blank' to={"https://www.facebook.com/people/The-Roots-Studio/61553981725684/"}><FacebookIcon css={iconStyles} /></Link>
        <Link target='_blank' to={"https://www.instagram.com/the_roots_gyrotonic_training/"}><InstagramIcon css={iconStyles} /></Link>
        <Link
          to={'#'}
          onClick={(e) => {
            window.location.href = 'mailto:the.roots.exercise@gmail.com';
            e.preventDefault();
          }}
        >
          <MailOutlineIcon css={iconStyles} />
        </Link>
      </div>
      </div>
      <div css={logoContainerStyles}>
      </div>
    </div>
  )
}
