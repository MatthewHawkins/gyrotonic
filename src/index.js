/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n/i18n'; // Import the i18n configuration
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import i18n from './i18n/i18n'; // Import the initialized i18n instance


const root = ReactDOM.createRoot(document.getElementById('root'));

const appStyles = css`
:root{
  margin: 0px;
  padding: 0px;
}
`

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App css={appStyles} />
    </I18nextProvider>
  </React.StrictMode>
);