import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MenuBar from "./components/MenuBar";
import Homepage from "./pages/Homepage";
import ContactHours from "./pages/ContactHours";
import Footer from "./components/Footer";
import TopSection from "./sections/TopSection";
import DataSecurity from "./pages/DataSecurity";

function App() {
  return (
    <Router>
      <MenuBar />
      <TopSection />
      <main>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/contact" element={<ContactHours />} />
          <Route path="/data-security" element={<DataSecurity />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </main>
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
