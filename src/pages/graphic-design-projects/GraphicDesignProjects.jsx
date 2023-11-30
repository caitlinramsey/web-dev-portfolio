import { FaCheckDouble } from "react-icons/fa6";
import React from "react";
import "./graphicdesignprojects.css";
import Container from "react-bootstrap/Container";

function GraphicDesignProjects() {
  return (
    <section
      id="graphic-design-projects"
      className="graphic-design-projects"
    >
      <h1>Graphic Design Projects</h1>
      <Container className="graphic-design-projects-container">
        <article className="graphic-design-service">
          <div className="graphic-design-service-header p-4">
            <h2>Graphic Design/Social Media Management</h2>
          </div>

          <ul className="graphic-design-service-name p-4 pt-5">
            <li>
              <FaCheckDouble className="graphic-design-service-name-icon" />
              <p>Content creation using Adobe Creative Suite and Canva.</p>
            </li>
            <li>
              <FaCheckDouble className="graphic-design-service-name-icon" />
              <p>Photography and editing projects available.</p>
            </li>
            <li>
              <FaCheckDouble className="graphic-design-service-name-icon" />
              <p>
                Experience in managing and creating content for professional
                Facebook, Instagram, and X accounts.
              </p>
            </li>
            <li>
              <FaCheckDouble className="graphic-design-service-name-icon" />
              <p>Advertising design projects available.</p>
            </li>
            <li>
              <FaCheckDouble className="graphic-design-service-name-icon" />
              <p>
                Experience managing multiple social media accounts through
                AgoraPulse.
              </p>
            </li>
          </ul>
        </article>
      </Container>
    </section>
  );
}

export default GraphicDesignProjects;