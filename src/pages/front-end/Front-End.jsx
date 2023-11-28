import React from "react";
import Container from "react-bootstrap/Container";
import project1 from "../../assets/zooquarium.jpg";
import project2 from "../../assets/note-taker.png";
import project3 from "../../assets/weatherpro.png";
import project4 from "../../assets/workday-scheduler.png";
import { Slide } from "react-awesome-reveal";
import FrontEndSkills from "../skills/front-end-skills/FrontEndSkills";
import './frontendprojects.css'

const projectInfoFrontEnd = [
  {
    id: 1,
    image: project1,
    title: "Zooquarium",
    description:
      "Introducing Zooquarium, a comprehensive app that empowers users to explore the wonders of the animal kingdom! With Zooquarium, you can effortlessly discover AZA-accredited zoos and aquariums in your vicinity, as well as delve into an extensive library of captivating photos and fascinating facts about a wide array of animals. Unleash your curiosity and immerse yourself in the world of wildlife with Zooquarium today!",
    github: "https://github.com/caitlinramsey/zooquarium",
    demo: "https://caitlinramsey.github.io/zooquarium/",
  },
  {
    id: 2,
    image: project2,
    title: "Note Taker",
    description:
      "This application is used for creating, saving, and deleting notes.",
    github: "https://github.com/caitlinramsey/note-taker",
    demo: "https://murmuring-eyrie-49522.herokuapp.com/",
  },
  {
    id: 3,
    image: project3,
    title: "WeatherPro",
    description:
      "Introducing WeatherPro, a cutting-edge Weather Dashboard app that provides comprehensive and accurate weather insights for any city in the United States. WeatherPro is your go-to solution for staying informed and prepared for any weather conditions. With WeatherPro, you can easily view the current weather conditions, including temperature, humidity, wind speed, and precipitation. The user-friendly interface makes it simple to navigate and quickly access the information you need.",
    github: "https://github.com/caitlinramsey/weather-forecast",
    demo: "https://caitlinramsey.github.io/weather-forecast/",
  },
  {
    id: 4,
    image: project4,
    title: "Workday Scheduler",
    description:
      "This application makes it easy to schedule tasks for your work day.",
    github: "https://github.com/caitlinramsey/work-day-scheduler",
    demo: "https://caitlinramsey.github.io/work-day-scheduler/",
  },
];

function FrontEndProject() {
  return (
    <section id="fe-project">
      <h1 className="fe-portfolio pt-3 pb-3 text-center">Front-End Projects</h1>
      {/* <hr
        style={{
          background: "black",
          color: "black",
          borderColor: "black",
          height: "3px",
          opacity: "1",
        }}
      /> */}
      <FrontEndSkills />
      <Slide direction="left" triggerOnce>
        <Container className="fe-project-container pb-4 pt-5 text-white">
          {projectInfoFrontEnd.map(
            ({ id, image, title, description, github, demo }) => {
              return (
                <article key={id} className="fe-project-item">
                  <h3 className="fe-project-title text-center fs-1 mb-2">
                    {title}
                  </h3>
                  <div className="fe-project-item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h4 className="fe-project-description fs-5 mt-3 mb-3">
                    {description}
                  </h4>
                  <div className="fe-project-item-links">
                    <a href={github} className="btn github-btn" target="-blank">
                      GitHub
                    </a>
                    <a href={demo} className="btn live-btn" target="-blank">
                      Live Site
                    </a>
                  </div>
                </article>
              );
            }
          )}
        </Container>
      </Slide>
    </section>
  );
}

export default FrontEndProject;
