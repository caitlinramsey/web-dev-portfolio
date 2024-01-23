import './logos.css';
import { Slide } from "react-awesome-reveal";
import Container from "react-bootstrap/Container";
import ddcLogo from '../../assets/graphic-design/logos/ddc-logo.jpg';
import rocketLogo from '../../assets/graphic-design/logos/rocket.png';
import balloonLogo from '../../assets/graphic-design/logos/balloon.png';
import pandaLogo from '../../assets/graphic-design/logos/panda.png';
import inItsPlace from '../../assets/graphic-design/logos/in-its-place.png';
import pugIcon from '../../assets/graphic-design/logos/pug-icon.png';
import theRoastedBean from '../../assets/graphic-design/logos/the-roasted-bean.png';
import svenTheFjord from '../../assets/graphic-design/logos/sven-the-fjord.png';
import nordicFjordPhoto from '../../assets/graphic-design/logos/nordic-fjord-photography.png';

function Logos() {
    return (
      <section id="logo">
        <h1 className="logo-title">Logos</h1>
        <Container className="logo-container">
          <Slide direction="left" triggerOnce>
            <div className="logos">
              <div className="logo-projects">
                <img src={pandaLogo} className='rocketlogo' alt="a panda logo from an exercise I did" />
                <img src={inItsPlace} className='initsplace' alt="a logo for a cleaning company" />
                <img src={nordicFjordPhoto} className='nordic-fjord-photo' alt="a logo for my photography business" />
                <img src={pugIcon} className='pug-icon' alt='a design I made in Canva that is an app icon' />
                <img src={theRoastedBean} className='the-roasted-bean' alt='a logo for a coffee shop' />
                <img src={svenTheFjord} className='sven-the-fjord' alt="a logo for for a horse brand" />
                <img src={ddcLogo} className='ddclogo' alt="the logo for my company" />
                <img src={rocketLogo} className='rocketlogo' alt="a rocket logo from an exercise I did" />
                <img src={balloonLogo} className='balloonlogo' alt="a hot air balloon logo from an exercise I did" />
              </div>
            </div>
          </Slide>
        </Container>
      </section>
    );
  }
  
  export default Logos;