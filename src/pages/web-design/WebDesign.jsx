import React from "react";
import "./webdesign.css";
import { Slide } from "react-awesome-reveal";
import Container from "react-bootstrap/Container";
import tiktokFigma from '../../assets/graphic-design/mockups/web-design/tiktok-figma.webp';
import signUp from '../../assets/graphic-design/mockups/web-design/sven-adventrures.webp';
import creditCardForm from '../../assets/graphic-design/mockups/web-design/checkout.webp';
import landingPage from '../../assets/graphic-design/mockups/web-design/equestrain-stockholm.webp';

function WebDesign() {
  return (
    <section id="web-design-projects">
      <h1 className="web-design-projects-title">Web Design</h1>
      <Container className="web-design-container">
        <Slide direction="left" triggerOnce>
          <div className="figma">
            <h1 className="figma-title text-center bg-transparent">Figma</h1>
            <h3 className="prototype text-center text-white">Click on the first image to be taken to the prototype!</h3>
            <a href="https://www.figma.com/proto/yaGrdqtrMlKF5XaEIIhARp/First-Design-Challenge---TikTok-MockUp?type=design&node-id=3-2&t=DdWEUzB4UmafCJc9-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A2" target="_blank" rel="noopener noreferrer">
              <img src={tiktokFigma} className='tiktok-figma' alt='a design I made in Figma that is a recreation of tiktok' />
            </a>
            <img src={landingPage} className='landing-page' alt='a design I made in Figma that is a landing page' />
            <img src={signUp} className='sign-up' alt='a design I made in Figma that is a signup page' />
            <img src={creditCardForm} className='credit-card-form' alt='a design I made in Figma that is a credit card form' />
          </div>
        </Slide>
      </Container>
    </section>
  );
}

export default WebDesign;