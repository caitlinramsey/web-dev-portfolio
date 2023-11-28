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
    <section id="skills" className="text-center mx-auto">
      <Slide direction="right" triggerOnce>
        <h2 className="main-section-title mb-5 pt-5">Skills</h2>
        <div className="skills-container d-flex flex-wrap mx-auto justify-content-center">
          <div className="section-title text-decoration-underline">
            <h3>Front-End</h3>
          </div>
          <div className="front-end">
            <div className="skills-icons d-grid">
              <Slide cascade damping={0.08} triggerOnce>
                <ReactIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <JsIcon iconClassName="skill-icon" divClassName="skill-div" />
                <HtmlIcon iconClassName="skill-icon" divClassName="skill-div" />
                <HandlebarsIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <CssIcon iconClassName="skill-icon" divClassName="skill-div" />
                <TailwindIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <BootstrapIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
                <BabelIcon
                  iconClassName="skill-icon"
                  divClassName="skill-div"
                />
              </Slide>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}
