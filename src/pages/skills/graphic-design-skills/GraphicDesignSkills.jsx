import { Slide } from "react-awesome-reveal";
import './graphicdesignskills.css'

import {
    PhotoshopIcon,
    IllustratorIcon,
    PremiereProIcon,
    AfterEffectsIcon,
    CanvaIcon,
    MayaIcon,
    FacebookIcon,
    LinkedInIcon,
    WordPressIcon,
  } from "../Icons";
  
  export default function GraphicDesignSkills() {
    return (
      <section id="graphic-design-skills" className="text-center mx-auto">
        <Slide direction="right" triggerOnce>
          <div className="graphic-design-skills-container mx-auto justify-content-center">
            <div className="graphic-design-section-title text-decoration-underline">
              <h3>Graphic Design | 3D Design | Social Media Skills</h3>
            </div>
            <div className="graphic-design-skills-section">
              <div className="graphic-design-skills-icons">
                <Slide cascade damping={0.08} triggerOnce>
                  <PhotoshopIcon 
                  iconClassName="graphic-design-skill-icon" 
                  divClassName="graphic-design-skill-div" 
                  />
                  <IllustratorIcon
                    iconClassName="graphic-design-skill-icon"
                    divClassName="graphic-design-skill-div"
                  />
                  <PremiereProIcon
                    iconClassName="graphic-design-skill-icon"
                    divClassName="graphic-design-skill-div"
                  />
                  <AfterEffectsIcon
                    iconClassName="graphic-design-skill-icon"
                    divClassName="graphic-design-skill-div"
                  />
                  <CanvaIcon
                    iconClassName="graphic-design-skill-icon"
                    divClassName="graphic-design-skill-div"
                  />
                  <MayaIcon
                    iconClassName="graphic-design-skill-icon"
                    divClassName="graphic-design-skill-div"
                  />
                  <FacebookIcon
                    iconClassName="graphic-design-skill-icon"
                    divClassName="graphic-design-skill-div"
                  />
                  <LinkedInIcon 
                  iconClassName="graphic-design-skill-icon" 
                  divClassName="graphic-design-skill-div" 
                  />
                  <WordPressIcon 
                  iconClassName="graphic-design-skill-icon" 
                  divClassName="graphic-design-skill-div" 
                  />
                </Slide>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }