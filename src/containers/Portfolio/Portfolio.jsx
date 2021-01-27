import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h1>Portfolio</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <img
            src="./assets/portfolio-images/Track Finder.gif"
            className="image-fluid"
            alt="find a track"
            id="track-finder-img"
          />
        </div>
        <div className="col-sm-5">
          <h3>Find a Track!</h3>
          <h5>
            Have you ever been so frustrated to arrive at a running track only
            to find it closed? Application utilizing npm packages,
            express-handlebars, sequelize, MySQL. User input allows
            functionality to add a track, edit a track, or delete a track.
          </h5>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <img
            src="./assets/portfolio-images/Senior Travel Covid Care.gif"
            className="image-fluid"
            alt="covid project"
            id="covid-img"
          />
        </div>
        <div className="col-sm-5">
          <h3>Senior Travel Covid Care</h3>
          <h5>
            Application that utilizes a medicare and physician registry API.
            Target audience is senior citizens. Two APIs were used in the
            creation as well as a link to Google maps upon selection of a
            physican.
          </h5>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <img
            src="./assets/portfolio-images/All the yummy burgers!.gif"
            className="image-fluid"
            alt="burger app functionality"
            id="eat-da-burgers"
          />
        </div>
        <div className="col-sm-5">
          <h3>Eat Da Burger</h3>
          <h5>
            JavaScript + JQuery application that utilizes the open weather API.
            Application stores user info upon button click to deliver the
            current and 5-day forecast for the inputted city. Previous searched
            city is saved as a button so the user can search the same city with
            ease.
          </h5>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <img
            src="./assets/portfolio-images/CodingQuiz.png"
            className="image-fluid"
            alt="coding quiz"
            id="coding-quiz"
          />
        </div>
        <div className="col-sm-5">
          <h3>Coding Quiz</h3>
          <h5>
            JavaScript created application that utilizes local storage and timer
            functionalities. User is scored based on time elapsed and correct
            versus incorrect questions. Scores are saved and generated on a high
            scores html.
          </h5>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <img
            src="./assets/portfolio-images/Password Generator.gif"
            className="image-fluid"
            alt="password generator"
            id="password-generator"
          />
        </div>
        <div className="col-sm-5">
          <h3>Random Password Generator</h3>
          <h5>
            JavaScript generated application that utilizes user input to deliver
            a random password.
          </h5>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <img
              src="./assets/portfolio-images/weatherapi.png"
              className="image-fluid"
              alt="weather dashboard"
              id="weather-dashboard"
            />
          </div>
          <div className="col-sm-5">
            <h3>Weather Dashboard</h3>
            <h5>
              JavaScript + JQuery application that utilizes the open weather
              API. Application stores user info upon button click to deliver the
              current and 5-day forecast for the inputted city. Previous
              searched city is saved as a button so the user can search the same
              city with ease.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
