import React from "react";
import Project from "./Project";
import BlogSphere from "../images/bird.JPG";
import CosmicClimate from "../images/meerkat.JPG";
import WeatherDashboard from "../images/monkey.JPG";
import PassGenerator from "../images/panda.JPG";
import WorkDayScheduler from "../images/penguin.JPG";
import NoteTaker from "../images/wolf.JPG";
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
              title: "Blog Sphere",
              description: "A collaborative project",
              imgSrc: BlogSphere,
              deployedLink:
                "https://blogsphere.herokuapp.com",
              githubLink:
                "https://github.com/kylearmour1/BlogSphere.git",
            },
            {
              title: "Cosmic Climate",
              description: "A collaborative project",
              imgSrc: CosmicClimate,
              deployedLink:
                "https://dingbat-weasel.github.io/Cosmic-Climate/",
              githubLink:
                "https://github.com/dingbat-weasel/Cosmic-Climate.git",
            },
            {
              title: "Weather Dashboard",
              description: "bootcamp assignment",
              imgSrc: WeatherDashboard,
              deployedLink:
                "https://linhntran.github.io/weather-dashboard/",
              githubLink:
                "https://github.com/linhntran/weather-dashboard.git",
            },
            {
              title: "Password Generator",
              description: "bootcamp assignment",
              imgSrc: PassGenerator,
              deployedLink:
                "hhttps://linhntran.github.io/password-generator/",
              githubLink:
                "https://github.com/linhntran/password-generator.git",
            },
            {
              title: "Work Day Scheduler",
              description: "bootcamp assignment",
              imgSrc: WorkDayScheduler,
              deployedLink:
                "https://linhntran.github.io/work-day-scheduler/",
              githubLink:
                "https://github.com/linhntran/work-day-scheduler.git",
            },
            {
              title: "Note Taker",
              description: "bootcamp assignment",
              imgSrc: NoteTaker,
              deployedLink:
                "https://stormy-ridge-77061.herokuapp.com/",
              githubLink:
                "https://github.com/linhntran/note-taker.git",
            },
          ].map((project, index) => (
            // Div container for each project
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              {/* <h2>{project.title}</h2> */}
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