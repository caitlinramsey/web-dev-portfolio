import './logos.css';
import ddcLogo from '../../assets/graphic-design/logos/ddc-logo.jpg';
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
              </div>
            </div>
          </Slide>
        </Container>
      </section>
    );
  }
  
  export default Logos;