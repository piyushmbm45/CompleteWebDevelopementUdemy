import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <footer>
      <div className="footer">
        <p className="footerPara">copyright Piyush Jain {year}</p>
      </div>
    </footer>
  );
}

export default Footer;
