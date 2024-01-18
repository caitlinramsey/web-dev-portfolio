import './logos.css';
import ddcLogo from '../../assets/graphic-design/logos/ddc-logo.jpg';
import rocketLogo from '../../assets/graphic-design/logos/Day-1-rocket.png';
import { Slide } from "react-awesome-reveal";
import Container from "react-bootstrap/Container";

function Logos() {
    return (
      <section id="logo">
        <h1 className="logo-title">Logos</h1>
        <Container className="logo-container">
          <Slide direction="left" triggerOnce>
            <div className="logos">
              <div className="logo-projects">
                <img src={ddcLogo} className='ddclogo' alt="the logo for my company" />
                <img src={rocketLogo} className='rocketlogo' alt="a logo from an exercise I did" />
              </div>
            </div>
          </Slide>
        </Container>
      </section>
    );
  }
  
  export default Logos;