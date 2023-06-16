/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react'

import { jsx, css } from '@emotion/react'

export default function TopBar() {

const [prevScrollPos, setPrevScrollPos] = useState(0);
const [visible, setVisible] = useState(true);

const navbarStyles = css`
  position: fixed;
  height: 60px;
  width: 100%;
  background-color: grey;
  text-align: center;
  transition: top 0.6s;
  top: ${visible ? 0 : '-60px'};
`

function debounce(func, wait, immediate) {
	var timeout;
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
};
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);


    return (
        <div css={navbarStyles}>
          Test Bar
        </div>
    )
}
