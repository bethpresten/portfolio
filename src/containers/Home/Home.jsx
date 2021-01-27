import React from "react";
// import { Link } from "react-router-dom";
// import Footer from "../../components/Footer";
// import assets from "../../../public/assets/portfolio-images";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container" id="hide">
        <div className="row justify-content-center">
          <button className="btn btn-outline" id="about-me">
            Beth Presten
          </button>
        </div>
      </div>
      <div className="container" id="brand-statement">
        <div className="row">
          <div className="col-sm">
            <h4>Brand Statement</h4>
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
