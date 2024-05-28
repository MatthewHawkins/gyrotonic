/** @jsxImportSource @emotion/react */
import { jsx, Global, css } from '@emotion/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MenuBar from './components/MenuBar';
import Homepage from './pages/Homepage';
import ContactHours from './pages/ContactHours';
import Footer from './components/Footer';
import TopSection from './sections/TopSection';
import DataSecurity from './pages/DataSecurity';

function App() {

  const globalStyles = css`
  html,
  body {
    margin: 0;
    padding: 0;
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
        <Route path='/data-security' element={<DataSecurity />} />
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
  2) Finish footer
  3) Finish the get in touch section, need to get a form submission tool that works
  4) Responsivness :(
  5) Menu bar good/burger menu?
  6) Maybe make the text more concise?
  8) Add a "reviews" section in the hours and prices spot

  Later==
  1) Add a location section



  ====
  Change the photo at the top so that the logo and the text has "trainer" and not studio.


*/