import React from "react";
import "./webdesign.css";
import { Slide } from "react-awesome-reveal";
import Container from "react-bootstrap/Container";
import tiktokFigma from '../../assets/graphic-design/figma/tiktok.png';

function WebDesign() {
  return (
    <section id="web-design-projects">
      <h1 className="web-design-projects-title">Web Design</h1>
      <Container className="web-design-container">
        <Slide direction="left" triggerOnce>
          <div className="figma">
            <h1 className="figma-title text-center bg-transparent">Figma</h1>
            <h3 className="prototype text-center text-white">Click on the image to be taken to the prototype!</h3>
            <a href="https://www.figma.com/proto/yaGrdqtrMlKF5XaEIIhARp/First-Design-Challenge---TikTok-MockUp?type=design&node-id=3-2&t=DdWEUzB4UmafCJc9-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A2" target="_blank" rel="noopener noreferrer">
              <img src={tiktokFigma} className='tiktok-figma' alt='a design I made in Figma that is a recreation of tiktok' />
            </a>
          </div>
        </Slide>
      </Container>
    </section>
  );
}

export default WebDesign;