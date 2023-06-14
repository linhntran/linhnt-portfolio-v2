import React from "react";
import Project from "./Project";
import BlogSphere from "../images/blogsphere.png";
import CosmicClimate from "../images/cosmiclimate.png";
import WeatherDashboard from "../images/weather.png";
import PassGenerator from "../images/password.png";
import WorkDayScheduler from "../images/workday.png";
import NoteTaker from "../images/notetaker.png";
import Shifa from "../images/ShifaHome.png"
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "Shifa",
              description: "A collaborative project using the MVC paradigm, our own server-side API, user authentication, and a connection to a database.",
              imgSrc: Shifa,
              deployedLink:
                "https://shifa-wecare.herokuapp.com/",
              githubLink:
                "https://github.com/caseyfee/Shifa.git",
            },
            {
              title: "Blog Sphere",
              description: "A collaborative project using the MVC paradigm, our own server-side API, user authentication, and a connection to a database.",
              imgSrc: BlogSphere,
              deployedLink:
                "https://blogsphere.herokuapp.com",
              githubLink:
                "https://github.com/kylearmour1/BlogSphere.git",
            },
            {
              title: "Cosmic Climate",
              description: "A collaborative project integrating data received from multiple server-side API requests.",
              imgSrc: CosmicClimate,
              deployedLink:
                "https://dingbat-weasel.github.io/Cosmic-Climate/",
              githubLink:
                "https://github.com/dingbat-weasel/Cosmic-Climate.git",
            },
            {
              title: "Weather Dashboard",
              description: "Bootcamp assignment. Weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
              imgSrc: WeatherDashboard,
              deployedLink:
                "https://linhntran.github.io/weather-dashboard/",
              githubLink:
                "https://github.com/linhntran/weather-dashboard.git",
            },
            {
              title: "Password Generator",
              description: "Bootcamp assignment. An app that will run in the browser and will feature dynamically updatex HTML and CSS powered by JS.",
              imgSrc: PassGenerator,
              deployedLink:
                "https://linhntran.github.io/password-generator/",
              githubLink:
                "https://github.com/linhntran/password-generator.git",
            },
            {
              title: "Work Day Scheduler",
              description: "Bootcamp assignment. A simple calendar app that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
              imgSrc: WorkDayScheduler,
              deployedLink:
                "https://linhntran.github.io/work-day-scheduler/",
              githubLink:
                "https://github.com/linhntran/work-day-scheduler.git",
            },
            {
              title: "Note Taker",
              description: "Bootcamp assignment. An app that can be used to write and save notes using Express.js back end that will save and retrieve note data from a JSON file.",
              imgSrc: NoteTaker,
              deployedLink:
                "https://stormy-ridge-77061.herokuapp.com/",
              githubLink:
                "https://github.com/linhntran/note-taker.git",
            },
          ].map((project, index) => (
            // Div container for each project
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;