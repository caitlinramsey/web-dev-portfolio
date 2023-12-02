import React from "react";
import "./graphicdesignprojects.css";
import { Slide } from "react-awesome-reveal";
import Container from "react-bootstrap/Container";
import equistaff from '../../assets/graphic-design/equistaff.png';
import danahall from '../../assets/graphic-design/dana-hall-staff.png';
import kentuckyTack from '../../assets/graphic-design/tack-shop-kentucky.png';
import virginiaACircuit from '../../assets/graphic-design/virginia-a-circuit-show.png';
import sarahWildasin from '../../assets/graphic-design/sarah-wildasin-groom.png';
import psAd from '../../assets/graphic-design/ps-ad.jpg';
import creeksideEventing from '../../assets/graphic-design/creekside-eventing .png';
import cowanRanch from '../../assets/graphic-design/cowan-ranch.png';
import candiateFlyer from '../../assets/graphic-design/candiate-flyer.png';
import clientFlyer from '../../assets/graphic-design/client-flyer.png';
import barnStaffWilliston from '../../assets/graphic-design/barn-staff-williston.png';
import argiAssociates from '../../assets/graphic-design/agri-associates.png';
import fordField from '../../assets/graphic-design/ford-field-river-club.png';
import barnManagerBoston from '../../assets/graphic-design/barn-manager-boston.png';
import diastiStables from '../../assets/graphic-design/diasti-stables.png';
import scva from '../../assets/graphic-design/eventing-groom-scva.png';
import exerciseRider from '../../assets/graphic-design/exercise-rider.png';
import graphicDesigner from '../../assets/graphic-design/graphic-designer-ocala.png';
import groomTryon from '../../assets/graphic-design/groom-tryon.png';
import hunterJumperWashington from '../../assets/graphic-design/hunter-jumper-instructor-washington.png';
import minitube from '../../assets/graphic-design/minitube-usa.png';
import horseShowOrganizer from '../../assets/graphic-design/horse-show-organizer.png';

function GraphicDesignProjects() {
  return (
    <section
      id="graphic-design-projects"
    >
      <h1>Graphic Design Projects</h1>
      <Container className="graphic-design-container">
        <Slide direction="left" triggerOnce>
          return (
          <div className="graphic-design-projects">
            <img src={equistaff} className='equistaff' alt="an advertisement for an equestrian recruiting company"></img>
            <img src={danahall} className='danahall' alt="an advertisement for a job at a horse stable"></img>
            <img src={kentuckyTack} className='kentucky-tack' alt="an advertisement for a job at a tack shop"></img>
            <img src={virginiaACircuit} className='virginia-a-circuit' alt="an advertisement for a job as a show groom and rider"></img>
            <img src={sarahWildasin} className='sarah-wildasin' alt="an advertisement for a job as a stay at home eventing groom"></img>
            <img src={psAd} className='ps-ad' alt="a mock advertisement for PlayStation"></img>
            <img src={creeksideEventing} className='creekside-eventing' alt="an advertisement for a job as an assistant trainer"></img>
            <img src={cowanRanch} className='cowan-ranch' alt="an advertisement for a job as barn staff"></img>
            <img src={candiateFlyer} className='candidate-flyer' alt="an advertisement for candidates from equistaff"></img>
            <img src={clientFlyer} className='client-flyer' alt="an advertisement for clients for equistaff"></img>
            <img src={barnStaffWilliston} className='barn-staff-williston' alt="an advertisement for a job as barn staff"></img>
            <img src={argiAssociates} className='agri-associates' alt="an advertisement for a job as a equine feed/nutrition sales associate"></img>
            <img src={fordField} className='ford-field' alt="an advertisement for a job as an equestrian director"></img>
            <img src={barnManagerBoston} className='barn-manager-boston' alt="an advertisement for a job as a barn manager"></img>
            <img src={diastiStables} className='diasti-stables' alt="an advertisement for a job as an equestrian director"></img>
            <img src={scva} className='scva' alt="an advertisement for a job as an eventing groom"></img>
            <img src={exerciseRider} className='exercise-rider' alt="an advertisement for a job as an exercise rider"></img>
            <img src={graphicDesigner} className='graphic-designer' alt="an advertisement for a job as a graphic designer"></img>
            <img src={groomTryon} className='groom-tryon' alt="an advertisement for a job as a groom"></img>
            <img src={hunterJumperWashington} className='hunter-jumper-washington' alt="an advertisement for a job as a hunter jumper instructor"></img>
            <img src={minitube} className='minitube' alt="an advertisement for a job as an outside sales representative"></img>
            <img src={horseShowOrganizer} className='horse-show-organizer' alt="an advertisement for a job as a horse show organizer"></img>
          </div>
          );
        </Slide>
      </Container>
    </section>
  );
}

export default GraphicDesignProjects;