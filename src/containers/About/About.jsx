import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row" id="about">
          <div className="col-sm-3">
            <img
              src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/47376630_10109365456626690_7928584094558978048_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=OXLTxhMETKkAX9K7Q1e&_nc_oc=AQlwDRvhhdPsoH2paq2j7_tvrk_SzerAKPzLeoF5nv7KnhFzLk_7RwwCW6m6yaE4_VuoYLYE4BcBxro-0iwrowYu&_nc_ht=scontent-atl3-1.xx&oh=83c59cb3675102d783d496aebb2e1603&oe=6038330E"
              alt="Beth P running"
              id="biopic"
            />
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
