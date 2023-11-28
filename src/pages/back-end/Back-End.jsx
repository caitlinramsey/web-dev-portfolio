import React from "react";
import Container from "react-bootstrap/Container";
import project1 from "../../assets/bugbytes.jpg";
import project2 from "../../assets/borrowhood-mockup.jpg";
import { Slide } from "react-awesome-reveal";
import BackEndSkills from "../skills/back-end-skills/BackEndSkills";
import './backendprojects.css'

const projectInfoBackEnd = [
  {
    id: 1,
    image: project1,
    title: "BUGbytes",
    description:
      "Introducing BUGBytes: The ultimate hub for gamers to connect, collaborate, and conquer challenges together. With BUGBytes, you can create an account and dive into a world of shared insights and creative problem-solving. Tackle bugs in games as a community, enhancing the gaming experience for everyone involved. The live site link is now a video walkthrough due to the dynos getting too expensive.",
    github: "https://github.com/HarrisSte/BUGbytes",
    demo: "https://drive.google.com/file/d/1j85iFsPAVjscj3OAoofXpznVFT4epvQI/view",
  },
  {
    id: 2,
    image: project2,
    title: "Borrowhood",
    description:
      "Borrowhood is an application which allows people to borrow needed items from their neighbors. It also allows neighbors to lend and borrow tools, equipment, and household items with or from one another. It encourages community interaction and sharing of resources which, in turn, minimizes individual purchases and decreases landfill waste. It is easy and fast to sign up and start listing items available for lending or searching for what you need!",
    github: "https://github.com/caitlinramsey/borrowhood-cr",
    demo: "https://borrowhood-cr-f9cdabd8dd11.herokuapp.com/",
  },
];

function BackEndProject() {
  return (
    <section id="be-project">
      <h1 className="be-portfolio pt-3 text-center">Back-End Projects</h1>
      {/* <hr
        style={{
          background: "black",
          color: "black",
          borderColor: "black",
          height: "3px",
          opacity: "1",
        }}
      /> */}
      <BackEndSkills />
      <Slide direction="left" triggerOnce>
        <Container className="be-project-container pb-4 pt-5 text-white">
          {projectInfoBackEnd.map(
            ({ id, image, title, description, github, demo }) => {
              return (
                <article key={id} className="be-project-item">
                  <h3 className="be-project-title text-center fs-1 mb-2">
                    {title}
                  </h3>
                  <div className="be-project-item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h4 className="be-project-description fs-5 mt-3 mb-3">
                    {description}
                  </h4>
                  <div className="be-project-item-links">
                    <a href={github} className="btn github-btn" target="-blank">
                      GitHub
                    </a>
                    <a href={demo} className="btn live-btn" target="-blank">
                      Live Site
                    </a>
                  </div>
                </article>
              );
            }
          )}
        </Container>
      </Slide>
    </section>
  );
}

export default BackEndProject;
