import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-nav">Copyright© Beth Presten 2021</div>
      <ul>
        {" "}
        <i className="fas fa-phone"></i>
        404-483-1592
      </ul>
      <a href="mailto: bethpresten@gmail.com" />{" "}
      <i className="fas fa-envelope-square"></i>
      <a href="./assets/BethPresten WD Resumè.pdf" />
      <i className="fas fa-file"></i>
      <a href="https://github.com/bethpresten" />
      <i className="fab fa-github-square"></i>
      <a href="https://www.linkedin.com/in/beth-presten-b42a53132/" />
      <i className="fab fa-linkedin"></i>
    </footer>
  );
}

export default Footer;
