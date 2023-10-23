/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import logo2 from '../assets/images/2017-Logo-PNG-Transparent-Backround.png';


export default function MenuBar() {

  const [isAtTop, setIsAtTop] = useState(true);
  
  const menuBarStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around; //CHECK THIS WITH THE BOIS
  position: fixed;
  width: calc(100%);
  top: 0;
  left: 0;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2em;
  background-color: transparent;
  transition: top 0.3s;
  z-index: 9999;
  padding: ${isAtTop ? '45px 0' : '30px 0'}; 
  box-shadow: ${isAtTop ? 'none' : '0 0 30px -5px rgba(0, 0, 0, 0.1)'};
  ${isAtTop ? 'background-color: transparent' : 'background-color: #F6F5E8'};
  transition: background-color 0.3s, padding 0.3s;
  `;
  
  const listStyles = css`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
  `;

const listItemStyles = css`
  margin-right: 20px;
  `;

const linkStyles = css`
  transition: color 0.5s;
  ${isAtTop ? 'color: rgba(208, 208, 209, 0.65)' : 'color: #333'};
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
`

const iconStyles = css`
  ${isAtTop ? 'color: rgba(208, 208, 209, 0.65)' : 'color: #333'};
  transition: color 0.5s;
  
  :hover{
    ${isAtTop ? 'color: white' : 'color: #999'};
  }
`;




  useEffect(() => {
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

  return (
    <div css={menuBarStyles}>
      <nav>
        <ul css={listStyles}>
          <li css={listItemStyles}><Link to="/homepage#home" css={linkStyles}> Home</Link></li>
          {/* <li css={listItemStyles}><Link to="/homepage#home" css={linkStyles}> Our Studio</Link></li> */}
          <li css={listItemStyles}><Link to="/homepage#methodology" css={linkStyles}> Methodology</Link></li>
          <li css={listItemStyles}><Link to="/homepage#equipment" css={linkStyles}> Equipment</Link></li>
          <li css={listItemStyles}><Link to="/homepage#team" css={linkStyles}> Team</Link></li>
          {/* <li css={listItemStyles}><a to="#studio" css={linkStyles}>Studio</a></li> */}
          <li css={listItemStyles}><Link to="/contact#hours-and-prices" css={linkStyles}> Lessons and Prices</Link></li>
          <li css={listItemStyles}><Link to="/contact#contact" css={linkStyles}> Contact</Link></li>
        </ul>
      </nav>
      <div css={iconDisplayStyles}>
        <FacebookIcon css={iconStyles}/>
        <InstagramIcon css={iconStyles}/>
        <TwitterIcon css={iconStyles}/>
      </div>
    </div>
  );
};
