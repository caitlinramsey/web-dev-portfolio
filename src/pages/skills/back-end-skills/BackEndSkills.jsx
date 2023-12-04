import { Slide } from "react-awesome-reveal";
import "./backendskills.css";

import {
  NodeIcon,
  ExpressIcon,
  MysqlIcon,
  SequelizeIcon,
  MongodbIcon,
  GraphqlIcon,
  ApolloIcon,
  MongooseIcon,
} from "../Icons";

export default function BackEndSkills() {
  return (
    <section id="back-end-skills" className="text-center mx-auto">
      <Slide direction="right" triggerOnce>
        <div className="back-end-skills-container mx-auto justify-content-center">
          <div className="back-end-section-title text-decoration-underline">
            <h3>Back-End Skills</h3>
          </div>
          <div className="back-end-skills-section">
            <div className="back-end-skills-icons">
              <Slide cascade damping={0.08} triggerOnce>
                <NodeIcon
                  iconClassName="back-end-skill-icon"
                  divClassName="back-end-skill-div"
                />
                <ExpressIcon
                  iconClassName="back-end-skill-icon"
                  divClassName="back-end-skill-div"
                />
                <MongodbIcon
                  iconClassName="back-end-skill-icon"
                  divClassName="back-end-skill-div"
                />
                <MongooseIcon
                  iconClassName="back-end-skill-icon"
                  divClassName="back-end-skill-div"
                />
                <GraphqlIcon
                  iconClassName="back-end-skill-icon"
                  divClassName="back-end-skill-div"
                />
                <ApolloIcon
                  iconClassName="back-end-skill-icon"
                  divClassName="back-end-skill-div"
                />
                <MysqlIcon
                  iconClassName="back-end-skill-icon"
                  divClassName="back-end-skill-div"
                />
                <SequelizeIcon
                  iconClassName="back-end-skill-icon"
                  divClassName="back-end-skill-div"
                />
              </Slide>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}
