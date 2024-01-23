import React from "react";
import "./three-d-design.css";
import { Slide } from "react-awesome-reveal";
import Container from "react-bootstrap/Container";
import maya from '../../assets/maya.mp4';

function ThreeDDesign() {
  return (
    <section id="three-d-design-projects">
      <h1 className="three-d-design-projects-title">3-D Design</h1>
      <Container className="three-d-design-container">
        <Slide direction="left" triggerOnce>
          <div className="maya">
            <h1 className="maya-title text-center bg-transparent">Autodesk Maya</h1>
            <video src={maya} className="maya-video" controls="controls" autoplay="true" />
          </div>
        </Slide>
      </Container>
    </section>
  );
}

export default ThreeDDesign;