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
      <a href="mailto: bethpresten@gmail.com">
        <i className="fas fa-envelope-square"></i>{" "}
      </a>
      <i className="fas fa-file"></i>
      <a href="https://github.com/bethpresten">
        <i className="fab fa-github-square"></i>{" "}
      </a>
      <a href="https://docs.google.com/document/d/1oMV8w_DrJdxOmNKOcHkWDbjSya_bKIwns5g80yeGr5M/edit?usp=sharing">
        <i className="fab fa-linkedin"></i>{" "}
      </a>
    </footer>
  );
}

export default Footer;
