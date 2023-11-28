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
    <section id="skills" className="text-center mx-auto">
      <Slide direction="right" triggerOnce>
        <div className="section-title text-decoration-underline">
          <h3>Back-End</h3>
        </div>
        <div className="back-end">
          <div className="skills-icons d-grid">
            <Slide cascade damping={0.08} triggerOnce>
              <NodeIcon iconClassName="skill-icon" divClassName="skill-div" />
              <ExpressIcon
                iconClassName="skill-icon"
                divClassName="skill-div"
              />
              <MongodbIcon
                iconClassName="skill-icon"
                divClassName="skill-div"
              />
              <MongooseIcon
                iconClassName="skill-icon"
                divClassName="skill-div"
              />
              <GraphqlIcon
                iconClassName="skill-icon"
                divClassName="skill-div"
              />
              <ApolloIcon iconClassName="skill-icon" divClassName="skill-div" />
              <MysqlIcon iconClassName="skill-icon" divClassName="skill-div" />
              <SequelizeIcon
                iconClassName="skill-icon"
                divClassName="skill-div"
              />
            </Slide>
          </div>
        </div>
      </Slide>
    </section>
  );
}
