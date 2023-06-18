/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React, { useState, useEffect } from 'react';

export default function MenuBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  
  const menuBarStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f5f5f5;
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
`;

const listItemStyles = css`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const linkStyles = css`
  color: #333;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #666;
  }
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
          <li css={listItemStyles}><a href="#home" css={linkStyles}>Home</a></li>
          <li css={listItemStyles}><a href="#methodology" css={linkStyles}>Methodology</a></li>
          <li css={listItemStyles}><a href="#hours-and-prices" css={linkStyles}>Hours and Prices</a></li>
          <li css={listItemStyles}><a href="#biography" css={linkStyles}>Biography</a></li>
          <li css={listItemStyles}><a href="#contact" css={linkStyles}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};
