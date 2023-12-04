import { Slide } from "react-awesome-reveal";
import './toolskills.css'

import {
  GitIcon,
  JestIcon,
  HerokuIcon,
  InsomniaIcon,
  NetlifyIcon,
  VscodeIcon,
  ChromeIcon,
  GithubIcon,
} from "../Icons";

export default function ToolSkills() {
  return (
    <section id="tool-skills" className="text-center mx-auto">
      <Slide direction="right" triggerOnce>
        <div className="tool-skills-container mx-auto justify-content-center">
          <div className="tool-section-title text-decoration-underline">
            <h3>Tools</h3>
          </div>
          <div className="tools">
            <div className="tool-skills-icons">
              <Slide cascade damping={0.08} triggerOnce>
                <GitIcon 
                iconClassName="tool-skill-icon" 
                divClassName="tool-skill-div" 
                />
                <GithubIcon
                  iconClassName="tool-skill-icon"
                  divClassName="tool-skill-div"
                />
                <VscodeIcon
                  iconClassName="tool-skill-icon"
                  divClassName="vskill-div"
                />
                <HerokuIcon
                  iconClassName="tool-skill-icon"
                  divClassName="tool-skill-div"
                />
                <NetlifyIcon
                  iconClassName="tool-skill-icon"
                  divClassName="tool-skill-div"
                />
                <ChromeIcon
                  iconClassName="tool-skill-icon"
                  divClassName="tool-skill-div"
                />
                <InsomniaIcon
                  iconClassName="tool-skill-icon"
                  divClassName="tool-skill-div"
                />
                <JestIcon 
                iconClassName="tool-skill-icon" 
                divClassName="tool-skill-div" 
                />
              </Slide>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}