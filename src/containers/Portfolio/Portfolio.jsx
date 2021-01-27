import React from "react";
import "./Portfolio.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../projects.json";

function Portfolio() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h1>Portfolio</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <ProjectCard
            id={projects[0].id}
            key={projects[0].id}
            name={projects[0].name}
            image={projects[0].image}
            description={projects[0].description}
            link={projects[0].link}
          />
        </div>
        <div className="col-sm-6">
          <ProjectCard
            id={projects[1].id}
            key={projects[1].id}
            name={projects[1].name}
            image={projects[1].image}
            description={projects[1].description}
            link={projects[1].link}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <ProjectCard
            id={projects[2].id}
            key={projects[2].id}
            name={projects[2].name}
            image={projects[2].image}
            description={projects[2].description}
            link={projects[2].link}
          />
        </div>
        <div className="col-sm-6">
          <ProjectCard
            id={projects[3].id}
            key={projects[3].id}
            name={projects[3].name}
            image={projects[3].image}
            description={projects[3].description}
            link={projects[3].link}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <ProjectCard
            id={projects[4].id}
            key={projects[4].id}
            name={projects[4].name}
            image={projects[4].image}
            description={projects[4].description}
            link={projects[4].link}
          />
        </div>
        <div className="col-sm-6">
          <ProjectCard
            id={projects[5].id}
            key={projects[5].id}
            name={projects[5].name}
            image={projects[5].image}
            description={projects[5].description}
            link={projects[5].link}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

// <div className="row">
// <div className="col-sm-4">
//   <img
//     src="./assets/portfolio-images/All the yummy burgers!.gif"
//     className="image-fluid"
//     alt="burger app functionality"
//     id="eat-da-burgers"
//   />
// </div>
// <div className="col-sm-5">
//   <h3>Eat Da Burger</h3>
//   <h5>
//     JavaScript + JQuery application that utilizes the open weather API.
//     Application stores user info upon button click to deliver the
//     current and 5-day forecast for the inputted city. Previous searched
//     city is saved as a button so the user can search the same city with
//     ease.
//   </h5>
// </div>
// </div>
// <div className="row">
// <div className="col-sm-4">
//   <img
//     src="./assets/portfolio-images/CodingQuiz.png"
//     className="image-fluid"
//     alt="coding quiz"
//     id="coding-quiz"
//   />
// </div>
// <div className="col-sm-5">
//   <h3>Coding Quiz</h3>
//   <h5>
//     JavaScript created application that utilizes local storage and timer
//     functionalities. User is scored based on time elapsed and correct
//     versus incorrect questions. Scores are saved and generated on a high
//     scores html.
//   </h5>
// </div>
// </div>
// <div className="row">
// <div className="col-sm-4">
//   <img
//     src="./assets/portfolio-images/Password Generator.gif"
//     className="image-fluid"
//     alt="password generator"
//     id="password-generator"
//   />
// </div>
// <div className="col-sm-5">
//   <h3>Random Password Generator</h3>
//   <h5>
//     JavaScript generated application that utilizes user input to deliver
//     a random password.
//   </h5>
// </div>
// <div className="row">
//   <div className="col-sm-4">
//     <img
//       src="./assets/portfolio-images/weatherapi.png"
//       className="image-fluid"
//       alt="weather dashboard"
//       id="weather-dashboard"
//     />
//   </div>
//   <div className="col-sm-5">
//     <h3>Weather Dashboard</h3>
//     <h5>
//       JavaScript + JQuery application that utilizes the open weather
//       API. Application stores user info upon button click to deliver the
//       current and 5-day forecast for the inputted city. Previous
//       searched city is saved as a button so the user can search the same
//       city with ease.
//     </h5>
//   </div>
// </div> */}
