/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

import IconCard from './IconCard'

import stones from '../assets/icons/stones.png'
import exercise from '../assets/icons/exercise.png'
import strength from '../assets/icons/strength.png'
import lotus from '../assets/icons/lotus.png'


export default function IconDisplay() {
  
  const displayStyles = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  `
  
  return (
    <div css={displayStyles}>
      <IconCard 
        imagePath={stones}
        title='Balance'
        text='Balances the mind, body and emotions, activates the center of the body and allows a free flow of energy'
      />
      <IconCard 
        imagePath={exercise}
        title='Health'
        text='Trains strength, flexibility, mobility, and most of all the decompression of the spine to prevent and rehabilitate injuries'
      />
      <IconCard 
        imagePath={lotus}
        title='Well-being'
        text='Releases stress and enhances regeneration, and improves overall well-being'
      />
    </div>
  )
}
