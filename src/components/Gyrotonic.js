/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

export default function Gyrotonic( {size, text} ) {

  const gyroStyles = css`
    font-family: 'Times New Roman', Times, serif;
    font-weight: bold;
    font-size: ${size};
  `

  return (
    <span css={gyroStyles}>{text || "GYROTONIC"}&reg;</span>
    // <span css={gyroStyles}>GYROTONIC®</span> 
  )
}