/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React, { useState, useEffect } from 'react';

import gyroLogo from '../assets/images/logo_small.png'

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
    height: 100px;
    width: 100px;
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
      <div css={col1Styles}>
        <img src={gyroLogo} css={logoStyles}></img>
        <p><b>GYROTONIC®, GYROTONIC® Logo, GYROTONIC EXPANSION SYSTEM®, and GYROKINESIS® 
        <br></br><br></br>The Art of Exercising and Beyond&reg;</b> are registered trademarks and are trademarks of Gyrotonic Sales Corp.</p>
      </div>
        <p>
          <br></br><br></br>
          Icons from MaterialIcon and <a href='flaticon.com'>FlatIcon</a>
          <br></br><br></br>
          Photos and videos by Colin Jacobs
          <br></br><br></br>
          <Link to='/data-security'>Data Protection Declaration</Link></p>

        <div css={iconDisplayStyles}>
        <FacebookIcon css={iconStyles}/>
        <InstagramIcon css={iconStyles}/>
        <MailOutlineIcon css={iconStyles}/>
      </div>
      </div>
      <div css={logoContainerStyles}>
      </div>
    </div>
  )
}
