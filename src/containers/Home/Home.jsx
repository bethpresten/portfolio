import React from "react";
// import { Link } from "react-router-dom";
// import Footer from "../../components/Footer";
// import assets from "../../../public/assets/portfolio-images";

const Home = () => {
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

    /* // <>

    //   <div className="row">
    //     <div className="col">
    //       <h1 className="text-center">Hello World</h1>
    //       <p>Hoth watto jango darth darth. Leia moff lars leia sidious. Darth ewok gamorrean wampa fett. Anakin sith darth darth antilles maul antilles organa qui-gon. Secura darth organa twi'lek yoda hutt coruscant. Anakin darth wicket moff darth c-3po. Darth maul calrissian tatooine skywalker antilles ben ewok. Darth wampa dooku kessel ewok organa yoda skywalker. Leia dooku jawa solo antilles. Hoth windu antilles moff ackbar. Secura calamari alderaan skywalker organa dooku skywalker yavin. Dagobah qui-gon zabrak wedge mara windu boba luke.</p>
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="col-sm-4">
    //       <Card title="LinkedIn" link="http://www.linkedin.com/in/bethpresten" image="" description="This is my LinkedIn profile" alt="this is my alt text." />
    //     </div>
    //     <div className="col-sm-4">
    //       <Card title="Github" linke />
    //     </div>
    //     <div className="col-sm-4">
    //       <Card title="Resume" />
    //     </div>
    //   </div>
    //   {/* <div><Footer /></div> */

    // </> */}
  );
};

export default Home;
