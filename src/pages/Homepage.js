import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import OurStudio from "../sections/OurStudio";
import Methodology from "../sections/Methodology";
import Equipment from "../sections/Equipment";
import Biography from "../sections/Biography";

export default function Homepage() {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <OurStudio />
      <Methodology />
      <Equipment />
      <Biography />
    </>
  );
}
