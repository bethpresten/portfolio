import React, { useEffect } from "react";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const nav = document.querySelector(".navbar");
    const translate = document.querySelectorAll(".translate");
    const engineerHeader = document.querySelector(".software-engineer");
    const webDevHeader = document.querySelector(".web-developer");
    const iAm = document.querySelector(".i-am-a");
    const iAmBeth = document.querySelector(".i-am-beth");
    const header = document.querySelector("header");
    let header_height = header.offsetHeight;
    const offset = "";
    window.onscroll = function () {
      if (window.pageYOffset > offset) {
        nav.classList.remove("bottom-nav");
        nav.classList.add("top-nav");
      } else {
        nav.classList.add("bottom-nav");
        nav.classList.remove("top-nav");
      }
    };

    window.addEventListener("scroll", () => {
      let scroll = window.pageYOffset;
      console.log(scroll);
      console.log(header_height);
      translate.forEach((element) => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
      });
      webDevHeader.style.opacity = -scroll / (header_height / 10) + 2.6;
      engineerHeader.style.opacity = -scroll / (header_height / 2) + 1.1;
      if (scroll > 400) {
        iAm.style.opacity = -scroll / header_height + 0.6;
        iAmBeth.style.opacity = -scroll / header_height + 0.6;
      } else {
        iAm.style.opacity = 1;
        iAmBeth.style.opacity = 1;
      }
    });
  });
  return (
    <div>
      <div className="container">
        <header>
          <h2 class="i-am-beth translate" data-speed=".7">
            I'M BETH
          </h2>
          <h2 class="i-am-a translate" data-speed=".5">
            & I am a
          </h2>
          <h2 class="web-developer translate" data-speed="-.8">
            FULL STACK WEB DEVELOPER
          </h2>
          <h2 class="software-engineer translate" data-speed="-.9">
            SOFTWARE ENGINEER
          </h2>
        </header>
        <br />
        <br />
        <div className="row" id="brand-row">
          <div className="col-sm">
            <h4 class="brand-statement translate">Brand Statement</h4>
            <p>
              Full stack web developer leveraging marketing and sales background
              to build quality user experiences in mobile and web applications.
              Earned a certificate in full stack development from Georgia Tech,
              enhancing my skills in responsive web design JavaScript, React.js,
              Node.js, and MySQL. Successfully developed a revenue generating
              startup 3rd party fitness organization, which grew a 4K+ social
              media following and partnerships with industry leading software
              and fitness businesses. Passionate about creating life-enhancing
              user experiences and collaborating with others to develop
              meaningful mobile and web applications. Positioned to provide
              unique perspectives on how end users interact with websites and
              software platforms by leveraging background in consumer product
              goods sales and marketing with industry leading brands.
            </p>
            <ul>
              Soft skills include verbal and written communication, enthusiasm
              and positivity, and a competitive spirit to bring the best out of
              myself and those with whom I work.
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
