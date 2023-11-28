import { Slide } from "react-awesome-reveal";
import "./frontendskills.css";

import {
  ReactIcon,
  JsIcon,
  HtmlIcon,
  HandlebarsIcon,
  CssIcon,
  TailwindIcon,
  BootstrapIcon,
  BabelIcon,
} from "../Icons";

export default function FrontEndSkills() {
  return (
    <section id="front-end-skills" className="text-center mx-auto">
      <Slide direction="right" triggerOnce>
        <div className="front-end-skills-container mx-auto justify-content-center">
          <div className="front-end-section-title text-decoration-underline">
            <h3>Front-End Skills</h3>
          </div>
          <div className="front-end">
            <div className="front-end-skills-icons">
              <Slide cascade damping={0.08} triggerOnce>
                <ReactIcon
                  iconClassName="front-end-skill-icon"
                  divClassName="front-end-skill-div"
                />
                <JsIcon
                  iconClassName="front-end-skill-icon"
                  divClassName="front-end-skill-div"
                />
                <HtmlIcon
                  iconClassName="front-end-skill-icon"
                  divClassName="front-end-skill-div"
                />
                <HandlebarsIcon
                  iconClassName="front-end-skill-icon"
                  divClassName="front-end-skill-div"
                />
                <CssIcon
                  iconClassName="front-end-skill-icon"
                  divClassName="front-end-skill-div"
                />
                <TailwindIcon
                  iconClassName="front-end-skill-icon"
                  divClassName="front-end-skill-div"
                />
                <BootstrapIcon
                  iconClassName="front-end-skill-icon"
                  divClassName="front-end-skill-div"
                />
                <BabelIcon
                  iconClassName="front-end-skill-icon"
                  divClassName="front-end-skill-div"
                />
              </Slide>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}
