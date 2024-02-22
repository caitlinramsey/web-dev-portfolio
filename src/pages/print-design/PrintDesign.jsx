import React from "react";
import "./printdesign.css";
import { Slide } from "react-awesome-reveal";
import Container from "react-bootstrap/Container";
import nordicCard from '../../assets/graphic-design/mockups/physical-items/nordicfjordphoto.webp';
import equistaffFlyer from '../../assets/graphic-design/mockups/physical-items/flyers-mockup.webp';
import equistaffBrochure from '../../assets/graphic-design/mockups/physical-items/equistaff-brochure.webp';
import maryCard from '../../assets/graphic-design/mockups/physical-items/mary-eq.webp';

function PrintDesign() {
  return (
    <section id="print-design-projects">
      <h1 className="print-design-projects-title">Print Design</h1>
      <Container className="print-design-container">
        <Slide direction="left" triggerOnce>
          <div className="print-projects">
            <img src={nordicCard} className='nordic-card' alt='a business card design for Nordic Fjord Photography' />
            <img src={equistaffFlyer} className='equistaff-flyer' alt='a flyer for Equistaff' />
            <img src={equistaffBrochure} className='equistaff-brochure' alt='a brochure design for Equistaff' />
            <img src={maryCard} className='mary-card' alt='a business card design for Mary' />
          </div>
        </Slide>
      </Container>
    </section>
  );
}

export default PrintDesign;