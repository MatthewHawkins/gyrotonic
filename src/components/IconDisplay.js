/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { useEffect } from 'react';

import IconCard from './IconCard'

import stones from '../assets/icons/stones.png'
import exercise from '../assets/icons/exercise.png'
import lotus from '../assets/icons/lotus.png'

import { useTranslation } from 'react-i18next';
import { translateIconSection } from '../utlities/translations';

export default function IconDisplay() {

  const { t } = useTranslation();

  useEffect(() => {
    translateIconSection()
  }, []);
  
  const displayStyles = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    @media (max-width: 768px){
    justify-content: center;
  }
  `
  
  return (
    <div css={displayStyles}>
      <IconCard 
        imagePath={stones}
        title={t('title1')}
        text={t('desc1')}
      />
      <IconCard 
        imagePath={exercise}
        title={t('title2')}
        text={t('desc2')}
      />
      <IconCard 
        imagePath={lotus}
        title={t('title3')}
        text={t('desc3')}
      />
    </div>
  )
}
