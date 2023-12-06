import React from "react";
import project1 from "../../assets/web-dev/logo-maker.svg";
import project2 from "../../assets/web-dev/readme-generator.png";
import project3 from '../../assets/web-dev/employee-tracker.png'
import project4 from '../../assets/web-dev/e-commerce-be.png'
import project5 from '../../assets/web-dev/social-network-api.png'
import { Slide } from "react-awesome-reveal";
import { Container } from "react-bootstrap";
import BackEndSkills from "../skills/back-end-skills/BackEndSkills";
import './backendprojects.css'

const projectInfoBackEnd = [
  {
    id: 1,
    image: project1,
    title: "Logo Maker",
    description:
      "This application collects information from the user after they have been asked a series of questions. The answers to these questions are complied and used to make a logo that reflects the choices made by the user.",
    github: "https://github.com/caitlinramsey/logo-maker",
    demo: "https://drive.google.com/file/d/1DNF0ZtjUloT25MgpTCvdR0Hw2YGHlfPS/view",
  },
  {
    id: 2,
    image: project2,
    title: "README Generator",
    description:
      "This application uses JavaScript, Node.js, and inquirer to generate a README.md. Once node index.js is entered into the command line, the user is asked a series of questions. Their answers to these questions will then be inserted in the proper sections of the generated README file. For the licensing, if a license is chosen, the badge for that license is generated and put into the README.md. If no license is chosen, nothing will be inserted. This application makes it so that a developer can quickly generate their README document and spend more time focusing on creating their application.",
    github: "https://github.com/caitlinramsey/readme-generator",
    demo: "https://drive.google.com/file/d/11-CLwpNzczoGF8fkAh-VjRQTGquNHleA/view",
  },
  {
    id: 3,
    image: project3,
    title: "Employee Tracker",
    description:
      "This comprehensive application has been meticulously crafted with the primary goal of consolidating essential organizational information into a centralized hub. By leveraging the power of MySQL and Inquirer, it offers a seamless and user-friendly interface for accessing a wealth of data pertaining to employees, managers, departments, roles, salaries, and identification details.",
    github: "https://github.com/caitlinramsey/sql-employee-tracker",
    demo: "https://drive.google.com/file/d/11-CLwpNzczoGF8fkAh-VjRQTGquNHleA/view",
  },
  {
    id: 4,
    image: project4,
    title: "E-Commerce Back End",
    description:
      "This application is an e-commerce backend which can create, read, update, and delete categories, products, and tags from a database. This application utilizes MySQL, Sequelize, Express.js, and dotenv in order to function.",
    github: "https://github.com/caitlinramsey/e-commerce-be",
    demo: "https://drive.google.com/file/d/1FaL0dQ1KT7CIszUn7mfYpPz32lXa-VJl/view",
  },
  {
    id: 5,
    image: project5,
    title: "Social Network API",
    description:
      "This application is an API which can be used by a social network web application to allow users to create a friend list, share their thoughts, and react to their friends thoughts. This app would be perfect for any social media company. It uses a NoSQL database, MongoDB as the database, Express.js for routing, and Mongoose ODM to handle large amount of unstructured data. Insomnia is used for testing routes and viewing the output of the routes. GET routes for users and thoughts are used to show data that is displayed in JSON format. POST, PUT, and DELETE routes are used in order to create, update, and delete users, thoughts, friends, and reactions in the database.",
    github: "https://github.com/caitlinramsey/nosql-social-network-api",
    demo: "https://drive.google.com/file/d/1pmXW9JSMOJvMzrbyowFjigPX7puGw03f/view",
  },
];

function BackEndProject() {
  return (
    <section id="be-project">
      <h1 className="be-portfolio pt-3 pb-3 text-center">Back-End Projects</h1>
      <BackEndSkills />
      <Container>
        <Slide direction="left" triggerOnce>
          {projectInfoBackEnd.map(
            ({ id, image, title, description, github, demo }) => {
              return (
                <div key={id}>
                  <h3 className="be-project-title text-center text-white fs-1 mb-2">
                    {title}
                  </h3>
                  <div className="be-project-image text-center d-block w-100">
                    <img src={image} alt={title} />
                  </div>
                  <h4 className="be-project-description text-center text-white fs-5 mt-3 mb-3">
                    {description}
                  </h4>
                  <div className="be-project-links d-flex justify-content-center pb-5">
                    <a
                      href={github}
                      className="btn be-github-btn"
                      target="-blank"
                    >
                      GitHub
                    </a>
                    <a href={demo} className="btn be-live-btn" target="-blank">
                      Live Site
                    </a>
                  </div>
                </div>
              );
            }
          )}
        </Slide>
      </Container>
    </section>
  );
}

export default BackEndProject;
