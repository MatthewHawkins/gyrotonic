/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../assets/images/2017-Logo-PNG-Transparent-Backround.png';


export default function MenuBar() {

  const [isAtTop, setIsAtTop] = useState(true);
  
  const menuBarStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2em;
  background-color: transparent;
  transition: top 0.3s;
  z-index: 9999;
  padding: ${isAtTop ? '45px 30px 45px 30px' : '30px'}; /* Adjust padding values as needed */
  box-shadow: ${isAtTop ? 'none' : '0 0 30px -5px rgba(0, 0, 0, 0.1)'};
  ${isAtTop ? 'background-color: transparent' : 'background-color: #F6F5E8'};
  transition: background-color 0.3s, padding 0.3s; /* Add a transition for color and padding */
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
  
  &:last-child {
    margin-right: 0px;
  }
  `;

const linkStyles = css`
  transition: color 0.5s;
  color: rgba(208, 208, 209, 0.65);
  ${isAtTop ? 'color: rgba(208, 208, 209, 0.65)' : 'color: #333'};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #999;
  }
  display: flex;
  gap: 5px;
`;

const logoStyles = css`
margin-left: auto;
margin-top: 20px;
width: 100%;
height: 1.2em;
/* border-radius: 50%; */
/* overflow: hidden; */
object-fit: cover;
object-position: center;
`

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
          <li css={listItemStyles}><Link to="/contact#hours-and-prices" css={linkStyles}> Hours and Prices</Link></li>
          <li css={listItemStyles}><Link to="/contact#contact" css={linkStyles}> Contact</Link></li>
          {/* <li css={listItemStyles}><img src={logo2} css={logoStyles}></img></li> */}
        </ul>
      </nav>
    </div>
  );
};
