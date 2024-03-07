import React from "react";
import project1 from "../../assets/web-dev/zooquarium.jpg";
import project2 from "../../assets/web-dev/note-taker.png";
import project3 from "../../assets/web-dev/weatherpro.png";
import project4 from "../../assets/web-dev/workday-scheduler.png";
import project5 from '../../assets/web-dev/password-generator.png';
import { Slide } from "react-awesome-reveal";
import { Container, Row, Col } from "react-bootstrap";
import FrontEndSkills from "../skills/front-end-skills/FrontEndSkills";
import "./frontendprojects.css";

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
      "This application serves as a versatile tool for users to effortlessly create, store, and manage their notes. With user-friendly features, it empowers individuals to compose, save, and organize their thoughts seamlessly. Whether capturing important ideas, jotting down reminders, or drafting to-do lists, the application provides a convenient and efficient platform. Additionally, users can easily delete notes they no longer need, ensuring a clutter-free and streamlined note-taking experience.",
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
      "Effortlessly manage your daily tasks with this intuitive scheduling application. Upon opening the calendar, the current date prominently appears at the top, providing instant orientation. The calendar is thoughtfully designed with time blocks corresponding to standard business hours, each color-coded for quick reference: past time blocks are shaded in gray, the present hour is highlighted in red, and future time blocks are displayed in refreshing green. Users can seamlessly save events for each hour of the day, ensuring organized planning, and all entries are conveniently stored in local storage for easy retrieval.",
    github: "https://github.com/caitlinramsey/work-day-scheduler",
    demo: "https://caitlinramsey.github.io/work-day-scheduler/",
  },
  {
    id: 5,
    image: project5,
    title: "Password Generator",
    description:
      "This robust password generator empowers users to craft highly secure and distinctive passwords tailored to their preferences. With an array of customizable options, users can specify the inclusion or exclusion of various elements, ensuring the generated password aligns precisely with their security requirements. Whether opting for a mix of uppercase and lowercase letters, numbers, symbols, or excluding specific characters, the tool provides granular control over the password creation process.",
    github: "https://github.com/caitlinramsey/password-generator",
    demo: "https://caitlinramsey.github.io/password-generator/",
  },
];

function FrontEndProject() {
  return (
    <section id="fe-project">
      <h1 className="fe-portfolio pt-3 pb-3 text-center">Front-End Projects</h1>
      <FrontEndSkills />
      <Container>
        <Slide direction="left" triggerOnce>
          {projectInfoFrontEnd.map(({ id, image, title, description, github, demo }) => {
            return (
              <div key={id} className="fe-projects mb-5">
                <h3 className="fe-project-title text-center text-white fs-1 mb-3">
                  {title}
                </h3>
                <Row>
                  <Col md={6} className="d-flex justify-content-center align-items-center">
                    <img src={image} alt={title} className="img-fluid" />
                  </Col>
                  <Col md={6}>
                    <div className="fe-project-info d-flex flex-column justify-content-center h-100">
                      <p className="fe-project-description text-white fs-5 mt-3 mb-3">
                        {description}
                      </p>
                      <div className="fe-project-links d-flex justify-content-center">
                        <a href={github} className="btn fe-github-btn mx-2" target="-blank">GitHub</a>
                        <a href={demo} className="btn fe-live-btn mx-2" target="-blank">Live Site</a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })}
        </Slide>
      </Container>
    </section>
  );
}

export default FrontEndProject;
