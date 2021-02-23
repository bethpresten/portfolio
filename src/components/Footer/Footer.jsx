import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-nav">Copyright© Beth Presten 2021</div>
      <ul>
        <i className="fas fa-phone"></i>
        404-483-1592
      </ul>
      <ul>
        <a
          href="mailto: bethpresten@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          bethpresten@gmail.com
        </a>
      </ul>
      <a
        href="mailto: bethpresten@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="footer"
      >
        <i className="fas fa-envelope-square fa-3x"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/beth-presten-b42a53132/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer"
      >
        <i className="fab fa-linkedin fa-3x"></i>
      </a>
      <a
        href="https://github.com/bethpresten"
        target="_blank"
        rel="noopener noreferrer"
        className="footer"
      >
        <i className="fab fa-github-square fa-3x"></i>
      </a>
      <a
        href="http://docs.google.com/document/d/1oMV8w_DrJdxOmNKOcHkWDbjSya_bKIwns5g80yeGr5M/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="footer"
      >
        <i className="fas fa-file fa-3x"></i>
      </a>
    </footer>
  );
}

export default Footer;
