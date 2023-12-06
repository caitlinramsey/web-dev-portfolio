import React, { useState, useEffect } from "react";
import "./graphicdesignprojects.css";
import { Slide } from "react-awesome-reveal";
import Container from "react-bootstrap/Container";

const equistaff = require('../../assets/graphic-design/equistaff.png');
const danahall = require('../../assets/graphic-design/dana-hall-staff.png');
const kentuckyTack = require('../../assets/graphic-design/tack-shop-kentucky.png');
const virginiaACircuit = require('../../assets/graphic-design/virginia-a-circuit-show.png');
const sarahWildasin = require('../../assets/graphic-design/sarah-wildasin-groom.png');
const psAd = require('../../assets/graphic-design/ps-ad.jpg');
const creeksideEventing = require('../../assets/graphic-design/creekside-eventing .png');
const cowanRanch = require('../../assets/graphic-design/cowan-ranch.png');
const candiateFlyer = require('../../assets/graphic-design/candiate-flyer.png');
const clientFlyer = require('../../assets/graphic-design/client-flyer.png');
const barnStaffWilliston = require('../../assets/graphic-design/barn-staff-williston.png');
const argiAssociates = require('../../assets/graphic-design/agri-associates.png');
const fordField = require('../../assets/graphic-design/ford-field-river-club.png');
const barnManagerBoston = require('../../assets/graphic-design/barn-manager-boston.png');
const diastiStables = require('../../assets/graphic-design/diasti-stables.png');
const scva = require('../../assets/graphic-design/eventing-groom-scva.png');
const exerciseRider = require('../../assets/graphic-design/exercise-rider.png');
const graphicDesigner = require('../../assets/graphic-design/graphic-designer-ocala.png');
const groomTryon = require('../../assets/graphic-design/groom-tryon.png');
const hunterJumperWashington = require('../../assets/graphic-design/hunter-jumper-instructor-washington.png');
const minitube = require('../../assets/graphic-design/minitube-usa.png');
const horseShowOrganizer = require('../../assets/graphic-design/horse-show-organizer.png');

function GraphicDesignProjects() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getImageDimensions = () => {
        if (windowWidth >= 1440) {
            return { maxWidth: 800, maxHeight: 800 };
        } else {
            return { maxWidth: 500, maxHeight: 500 };
        }
    };

    return (
        <section id="graphic-design-projects">
            <h1>Graphic Design Projects</h1>
            <Container className="graphic-design-container">
                <Slide direction="left" triggerOnce>
                    <div className="graphic-design-projects">
                        <img
                            src={equistaff}
                            className='equistaff'
                            alt="an advertisement for an equestrian recruiting company"
                            style={getImageDimensions()}
                        />
                        <img
                            src={danahall}
                            className='danahall'
                            alt="an advertisement for a job at a horse stable"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={kentuckyTack} 
                            className='kentucky-tack' 
                            alt="an advertisement for a job at a tack shop"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={virginiaACircuit} 
                            className='virginia-a-circuit' 
                            alt="an advertisement for a job as a show groom and rider"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={sarahWildasin} 
                            className='sarah-wildasin' 
                            alt="an advertisement for a job as a stay at home eventing groom"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={psAd} 
                            className='ps-ad' 
                            alt="a mock advertisement for PlayStation"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={creeksideEventing} 
                            className='creekside-eventing' 
                            alt="an advertisement for a job as an assistant trainer"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={cowanRanch} 
                            className='cowan-ranch' 
                            alt="an advertisement for a job as barn staff"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={candiateFlyer} 
                            className='candidate-flyer' 
                            alt="an advertisement for candidates from equistaff"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={clientFlyer} 
                            className='client-flyer' 
                            alt="an advertisement for clients for equistaff"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={barnStaffWilliston} 
                            className='barn-staff-williston' 
                            alt="an advertisement for a job as barn staff"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={argiAssociates} 
                            className='agri-associates' 
                            alt="an advertisement for a job as a equine feed/nutrition sales associate"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={fordField} 
                            className='ford-field' 
                            alt="an advertisement for a job as an equestrian director"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={barnManagerBoston} 
                            className='barn-manager-boston' 
                            alt="an advertisement for a job as a barn manager"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={diastiStables} 
                            className='diasti-stables' 
                            alt="an advertisement for a job as an equestrian director"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={scva} 
                            className='scva' 
                            alt="an advertisement for a job as an eventing groom"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={exerciseRider} 
                            className='exercise-rider' 
                            alt="an advertisement for a job as an exercise rider"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={graphicDesigner} 
                            className='graphic-designer' 
                            alt="an advertisement for a job as a graphic designer"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={groomTryon} 
                            className='groom-tryon' 
                            alt="an advertisement for a job as a groom"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={hunterJumperWashington} 
                            className='hunter-jumper-washington' 
                            alt="an advertisement for a job as a hunter jumper instructor"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={minitube} 
                            className='minitube' 
                            alt="an advertisement for a job as an outside sales representative"
                            style={getImageDimensions()}
                        />
                        <img 
                            src={horseShowOrganizer} 
                            className='horse-show-organizer' 
                            alt="an advertisement for a job as a horse show organizer"
                            style={getImageDimensions()}
                        />
                    </div>
                </Slide>
            </Container>
        </section>
    );
}

export default GraphicDesignProjects;