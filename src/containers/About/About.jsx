import React from "react";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <img
              src="../../../public/assets/portfolio-images/portfolio-picture.jpg"
              alt="Beth P running"
              id="biopic"
            />
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-7">
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
      <div className="container">
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
      </div>
    </>
  );
};

export default About;
