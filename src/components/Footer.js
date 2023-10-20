/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React, { useState, useEffect } from 'react';
import gyroLogo from '../assets/images/gyrotonic_sb.png'


export default function () {


  const mainStyles = css`
  display: flex;
  flex-direction: column;
  background-color: #F6F5E8;
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

  return (
    <div css={mainStyles}>
      <div css={infoStyles}>
        <p><b>GYROTONIC®, GYROTONIC® & Logo, GYROTONIC EXPANSION SYSTEM®, <p>The Art of Exercising and Beyond&reg;</p></b> are registered trademarks and are trademarks of Gyrotonic Sales Corp.</p>
        <p>More info here</p>
      </div>
      <div css={logoContainerStyles}>
        <img src={gyroLogo} css={logoStyles}></img>
      </div>
    </div>
  )
}
