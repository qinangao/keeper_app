//4. Create a Footer.jsx component that renders a <footer> element to show
// a copyright message in a <p> with a dynamically updated year.

import React from "react";

const today = new Date();
const currentYear = today.getFullYear();

function Footer() {
  return (
    <footer>
      <p>copyright © {currentYear}</p>
    </footer>
  );
}

export default Footer;
