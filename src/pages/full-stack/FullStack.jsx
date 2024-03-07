import React from "react";
import project1 from "../../assets/web-dev/bugbytes.jpg";
import project2 from "../../assets/web-dev/borrowhood-mockup.jpg";
import { Slide } from "react-awesome-reveal";
import { Container, Row, Col } from "react-bootstrap";
import './fullstackprojects.css'

const projectInfoFullStack = [
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

function FullStackProject() {
  return (
    <section id="fs-project">
      <h1 className="fs-portfolio pt-3 pb-3 text-center">Full Stack Projects</h1>
        <Container>
          <Slide direction="left" triggerOnce>
            {projectInfoFullStack.map(({ id, image, title, description, github, demo }) => {
              return (
                <div key={id} className="fs-projects mb-5">
                  <h3 className="fs-project-title text-center text-white fs-1 mb-3">
                    {title}
                  </h3>
                  <Row>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                      <img src={image} alt={title} className="img-fluid-fs" />
                    </Col>
                    <Col md={6}>
                      <div className="fs-project-info d-flex flex-column justify-content-center h-100">
                        <p className="fs-project-description text-center text-white fs-5 mt-3 mb-3">
                          {description}
                        </p>
                        <div className="fs-project-links d-flex justify-content-center">
                          <a href={github} className="btn fs-github-btn mx-2" target="-blank">GitHub</a>
                          <a href={demo} className="btn fs-live-btn mx-2" target="-blank">Live Site</a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Slide>
        </Container >
</section >
    );
}

export default FullStackProject;
