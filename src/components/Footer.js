/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React, { useState, useEffect } from 'react';


export default function () {

  const mainStyles = css`
    background-color: #f0e6da;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;

;
  `

  return (
    <div css={mainStyles}>
      <div >
        Info here?
      </div>
      <div>
        Other info here
      </div>
    </div>
  )
}
