/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export default function MenuBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  
  const menuBarStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2em;
  background-color: #F6F5E8;
  padding: 30px;
  transition: top 0.3s;
  z-index: 9999;
  ${visible ? 'top: 0;' : 'top: -100px;'}
`;

const listStyles = css`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
`;

const listItemStyles = css`
  margin-right: 20px;
  
  &:last-child {
    margin-right: 0;
  }
  `;

const linkStyles = css`
  transition: color 0.5s;
  color: #333;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #999;
  }
  display: flex;
  gap: 5px;
`;



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div css={menuBarStyles}>
      <nav>
        <ul css={listStyles}>
          <li css={listItemStyles}><Link to="/homepage#home" css={linkStyles}><HomeIcon /> Home</Link></li>
          <li css={listItemStyles}><Link to="/homepage#methodology" css={linkStyles}><SportsGymnasticsIcon /> Methodology</Link></li>
          <li css={listItemStyles}><Link to="/homepage#equipment" css={linkStyles}><FitnessCenterIcon /> Equipment</Link></li>
          <li css={listItemStyles}><Link to="/homepage#team" css={linkStyles}><ImportContactsIcon /> Team</Link></li>
          {/* <li css={listItemStyles}><a to="#studio" css={linkStyles}>Studio</a></li> */}
          <li css={listItemStyles}><Link to="/contact#hours-and-prices" css={linkStyles}><ScheduleIcon /> Hours and Prices</Link></li>
          <li css={listItemStyles}><Link to="/contact#contact" css={linkStyles}><ConnectWithoutContactIcon /> Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};
