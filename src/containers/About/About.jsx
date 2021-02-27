import React from "react";
import "./About.css";
import PortPic from "../../assets/portfolio-images/portfolio-picture.jpg";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row" id="about">
          <div className="col-sm-3">
            <img src={PortPic} alt="Beth P running" id="biopic" />
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-6" id="bio">
            <h1>A Snapshot of Beth Presten</h1>
            <p>
              Born, raised, and reside in metro-Atlanta. Philosophy: "never be
              outworked!" Former health/physical education teacher. Alma maters:
              Georgia Institute of Technology, Valdosta State University,
              University of Georgia, Georgia State University. Hobbies: running,
              fitness, learning, reading. Mom to two boys, married 18 years.
              Favorite thing about coding: the objectivity; creating a line of
              code and seeing its success immediately.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-sm-3" id="philosophy">
            <p>Philosophy: Never Be Outworked!</p>
          </div>
          <div className="col-sm-3" id="passion">
            <p>Passion: Fitness, health, running</p>
          </div>
          <div className="col-sm-3" id="competitive">
            <p>Competitive: With myself and with others!</p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default About;
