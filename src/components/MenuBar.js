/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from '@mui/icons-material/Menu';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import i18n from '../i18n/i18n'; // Import the initialized i18n instance
import { useTranslation } from 'react-i18next';
import { translateMenu } from '../utlities/translations';

export default function MenuBar() {
  
  
  const [isAtTop, setIsAtTop] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  const [language, setLanguage] = React.useState('English');
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const { t } = useTranslation();

  useEffect(() => {
    translateMenu();
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const scrollThreshold = 0.3 * window.innerHeight; // Adjust as needed

      if (scrollValue <= scrollThreshold) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuBarStyles = css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    width: calc(100%);
    top: 0;
    left: 0;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4em;
    background-color: transparent;
    transition: top 0.3s;
    z-index: 10;
    padding: ${isAtTop ? '45px 0' : '30px 0 15px 0'}; 
    box-shadow: ${isAtTop ? 'none' : '0 0 30px -5px rgba(0, 0, 0, 0.1)'};
    ${isAtTop ? 'background-color: transparent' : 'background-color: var(--background-color-secondary)'};
    transition: background-color 0.3s, padding 0.3s;
  
    @media (max-width: 768px){
      justify-content: space-between;
      padding: 1em 0 1em 1em;
    }
    `;

  const menuIconStyles = css`
    font-size: 1.4em;
    ${isAtTop ? 'color: rgba(308, 308, 309, 0.65)' : 'color: #333'};
    &:hover {
      ${isAtTop ? 'color: white' : 'color: #333'};
    }
    
    @media (min-width: 768px){
      display: none;
    }
    `

  const listStyles = css`
  display: ${isCollapsed ? 'none' : 'flex'};
  /* height: ${isCollapsed ? '0px' : 'auto'};
  overflow: hidden;
  transition: height .5s ease; */
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 10px;
  
  @media (max-width: 768px){
    flex-direction: column;
  }
  @media (min-width: 768px){
    display: flex !important;
  }
  `;

  const listItemStyles = css`
  margin-right: 20px;
  `;

  const linkStyles = css`
  transition: color 0.5s;
  ${isAtTop ? 'color: rgba(308, 308, 309, 0.65)' : 'color: #333'};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    ${isAtTop ? 'color: white' : 'color: #333'};
  }
  display: flex;
  gap: 5px;
  `;

  const iconDisplayStyles = css`
  display: flex;
  gap: 25px;
  
  @media (max-width: 768px){
    display: none;
  }
  `

const iconStyles = css`
  ${isAtTop ? 'color: rgba(208, 208, 209, 0.65)' : 'color: #333'};
  transition: color 0.5s;
  
  :hover{
    ${isAtTop ? 'color: white' : 'color: #999'};
  }
  `;

const languageMenu = css`
  z-index: 99;
  ${isAtTop ? 'color: white' : 'color: black'};
  
  & > fieldset{
    border-color: gray !important;
  }
  @media (max-width: 768px){
    max-height: 56px;
    margin-right: 2.5em
  }
  `

  const languageMenuItem = css`
  top: -10px
  z-index: 99;
  `

  return (
    <div css={menuBarStyles}>
      <nav>
        <MenuIcon css={menuIconStyles} onClick={e => {
          setIsCollapsed(!isCollapsed)
        }
        } />
        <ul css={listStyles}>
          <li css={listItemStyles}><Link to="/homepage#home" css={linkStyles}> {t('home')}</Link></li>
          {/* <li css={listItemStyles}><Link to="/homepage#home" css={linkStyles}> Our Studio</Link></li> */}
          <li css={listItemStyles}><Link to="/homepage#methodology" css={linkStyles}> {t('methodology')}</Link></li>
          <li css={listItemStyles}><Link to="/homepage#equipment" css={linkStyles}> {t('videos')}</Link></li>
          <li css={listItemStyles}><Link to="/homepage#team" css={linkStyles}> {t('team')}</Link></li>
          {/* <li css={listItemStyles}><a to="#studio" css={linkStyles}>Studio</a></li> */}
          <li css={listItemStyles}><Link to="/contact#hours-and-prices" css={linkStyles}> {t('prices')}</Link></li>
          <li css={listItemStyles}><Link to="/contact#contact" css={linkStyles}> {t('contact')}</Link></li>
        </ul>
      </nav>
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
      <Select
          labelId="language-select"
          id="language-select"
          value={language}
          label="Language"
          onChange={handleChange}
          css={languageMenu}
        >
          <MenuItem css={languageMenuItem} value={'English'} onClick={() => changeLanguage('en')}>EN</MenuItem>
          <MenuItem css={languageMenuItem} value={'Deutsche'} onClick={() => changeLanguage('de')}>DE</MenuItem>
          <MenuItem css={languageMenuItem} value={'Italiano'} onClick={() => changeLanguage('it')}>IT</MenuItem>
        </Select>
    </div>
  );
};
