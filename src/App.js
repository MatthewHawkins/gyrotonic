/** @jsxImportSource @emotion/react */
import { jsx, Global, css } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MenuBar from "./components/MenuBar";
import Homepage from "./pages/Homepage";
import ContactHours from "./pages/ContactHours";
import Footer from "./components/Footer";
import TopSection from "./sections/TopSection";
import DataSecurity from "./pages/DataSecurity";

function App() {
  const globalStyles = css`
    html,
    body {
      margin: 0;
      padding: 0;
    }
    :root {
      --font-size-title: 3rem;
      --font-size-regular: 1.35rem;
    }
    @media (max-width: 768px) {
      :root {
        --font-size-title: 2.5rem;
        --font-size-regular: 1.15rem;
      }
    }
  `;
  const contentCss = css`
    /* margin-top: 78px; */
  `;
  return (
    <Router>
      <Global styles={globalStyles} />
      <MenuBar />
      <TopSection />
      <div css={contentCss}>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/contact" element={<ContactHours />} />
          <Route path="/data-security" element={<DataSecurity />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

/*
  Before Launch==
  3) Finish the get in touch section, need to get a form submission tool that works
  8) Add a "reviews" section in the hours and prices spot

  Later==
  1) Add a location section


  ====
  Change the photo at the top so that the logo and the text has "trainer" and not studio.


*/
