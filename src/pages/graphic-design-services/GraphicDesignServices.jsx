import { FaCheckDouble } from "react-icons/fa6";
import React from "react";
import "./graphicdesignservices.css";
import Container from "react-bootstrap/Container";
import GraphicDesignSkills from "../skills/graphic-design-skills/GraphicDesignSkills";

function GraphicDesignServices() {
  return (
    <section
      id="graphic-design-services"
      className="graphic-design-services">
      <h1>Graphic Design Services</h1>
      <GraphicDesignSkills />
      <Container className="graphic-design-services-container">
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
              <p>Photography and editing services available.</p>
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
              <p>Advertising design services available.</p>
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

export default GraphicDesignServices;
