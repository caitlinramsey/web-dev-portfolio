import React from "react";
import "./webdevservices.css";
import { FaCheckDouble } from "react-icons/fa6";
import Container from "react-bootstrap/Container";

function WebDevServices() {
  return (
    <section id="web-dev-services" className="services">
      <h1>Web Development Services</h1>
      <Container className="web-dev-services-container">
        <article className="web-dev-service">
          <ul className="web-dev-service-name p-4 pt-5">
            <li>
              <FaCheckDouble className="web-dev-service-name-icon" />
              <p>
                Front-end and back-end development with database functionality.
              </p>
            </li>
            <li>
              <FaCheckDouble className="web-dev-service-name-icon" />
              <p>
                Third-party platform development (Squarespace, WordPress, Wix,
                Weebly).
              </p>
            </li>
            <li>
              <FaCheckDouble className="web-dev-service-name-icon" />
              <p>
                Responsive and semantic website design with accessibility in
                mind.
              </p>
            </li>
            <li>
              <FaCheckDouble className="web-dev-service-name-icon" />
              <p>UX/UI centered design.</p>
            </li>
          </ul>
        </article>
        <article className="web-dev-service">
          <ul className="web-dev-service-name p-4 pt-5">
            <li>
              <FaCheckDouble className="web-dev-service-name-icon" />
              <p>
                Custom web application development.
              </p>
            </li>
            <li>
              <FaCheckDouble className="web-dev-service-name-icon" />
              <p>
                Database design and management.
              </p>
            </li>
            <li>
              <FaCheckDouble className="web-dev-service-name-icon" />
              <p>
                Front-end and back-end optimization.
              </p>
            </li>
            <li>
              <FaCheckDouble className="web-dev-service-name-icon" />
              <p>API development and integration.</p>
            </li>
          </ul>
        </article>
      </Container>
    </section>
  );
}

export default WebDevServices;