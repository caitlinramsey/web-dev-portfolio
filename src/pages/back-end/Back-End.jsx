import React from "react";
import project1 from "../../assets/bugbytes.jpg";
import project2 from "../../assets/borrowhood-mockup.jpg";
import { Slide } from "react-awesome-reveal";
import Carousel from "react-bootstrap/Carousel";
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
      <BackEndSkills />
      {/* <hr
        style={{
          background: "black",
          color: "black",
          borderColor: "black",
          height: "3px",
          opacity: "1",
        }}
      /> */}
      <Slide direction="left" triggerOnce>
        <div className="carousel">
          <Carousel interval={10000}>
            {projectInfoBackEnd.map(
              ({ id, image, title, description, github, demo }) => {
                return (
                  <Carousel.Item key={id}>
                    <h3 className="be-project-title text-center text-white fs-1 mb-2">
                      {title}
                    </h3>
                    <div className="be-project-image text-center d-block w-100">
                      <img src={image} alt={title} />
                    </div>
                    <h4 className="be-project-description text-center text-white fs-5 mt-3 mb-3">
                      {description}
                    </h4>
                    <div className="be-project-links d-flex justify-content-center pb-5">
                      <a 
                        href={github} 
                        className="btn be-github-btn" 
                        target="-blank"
                      >
                        GitHub
                      </a>
                      <a href={demo} className="btn be-live-btn" target="-blank">
                        Live Site
                      </a>
                    </div>
                  </Carousel.Item>
                );
              }
            )}
          </Carousel>
        </div>
      </Slide>
    </section>
  );
}

export default BackEndProject;
