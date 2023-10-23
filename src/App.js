/** @jsxImportSource @emotion/react */
import { jsx, Global, css } from '@emotion/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MenuBar from './components/MenuBar';
import Homepage from './pages/Homepage';
import ContactHours from './pages/ContactHours';
import Footer from './components/Footer';
import TopSection from './sections/TopSection';

function App() {

  const globalStyles = css`
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
  }
  `;
  const contentCss = css`
    /* margin-top: 78px; */
  `
  return (
    <Router>
      <Global styles={globalStyles}/>
      <MenuBar />
      <TopSection />
      <div css={contentCss}>
        <Routes>
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/contact' element={<ContactHours />} />
        <Route path='*' element={<Homepage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

/*
  Before Launch==
  1) Replace equipment page with video section - switch with Methodology
  3) Finish footer
  4) Finish the get in touch section, need to get a form submission tool that works
  5) Responsivness :(
  6) Menu bar good?
  7) Maybe make the text more concise?
  8) Add citations for icons

  Later==
  1) Add a location section
*/