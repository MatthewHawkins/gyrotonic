/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appStyles = css`
:root{
  margin: 0px;
  padding: 0px;
}
`

root.render(
  <React.StrictMode>
    <App css={appStyles}/>
  </React.StrictMode>
);