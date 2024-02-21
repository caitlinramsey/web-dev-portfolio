import './logos.css';
import { Slide } from "react-awesome-reveal";
import Container from "react-bootstrap/Container";
import pandaLogo from '../../assets/graphic-design/mockups/logos/bamboo-panda-conservation.jpg';
import nordicFjordPhoto from '../../assets/graphic-design/mockups/logos/nordic-fjord-photo.jpg';
import inItsPlace from '../../assets/graphic-design/mockups/logos/initsplace.jpg';
import ddcLogo from '../../assets/graphic-design/mockups/logos/ddc-logo.jpg';
import theRoastedBean from '../../assets/graphic-design/mockups/logos/the-roasted-bean.jpg';
import svenTheFjord from '../../assets/graphic-design/mockups/logos/sven-the-fjord-pink.jpg';
import flintAndFlame from '../../assets/graphic-design/mockups/logos/flint-and-flame.jpg';
import snowdrop from '../../assets/graphic-design/mockups/logos/snowdrop.jpg';
import onward from '../../assets/graphic-design/mockups/logos/onward.jpg';
import pitch from '../../assets/graphic-design/mockups/logos/pitch.jpg';
import pugIcon from '../../assets/graphic-design/mockups/logos/pug-icon.jpg';
import rocketLogo from '../../assets/graphic-design/mockups/logos/rocketlogo.jpg';
import balloonLogo from '../../assets/graphic-design/mockups/logos/balloon-logo.jpg';

function Logos() {
    return (
      <section id="logo">
        <h1 className="logo-title">Logos</h1>
        <Container className="logo-container">
          <Slide direction="left" triggerOnce>
            <div className="logos">
              <div className="logo-projects">
                <img src={pandaLogo} className='pandalogo' alt="a panda logo from an exercise I did" />
                <img src={nordicFjordPhoto} className='nordic-fjord-photo' alt="a logo for my photography business" />
                <img src={inItsPlace} className='initsplace' alt="a logo for a cleaning company" />
                <img src={ddcLogo} className='ddclogo' alt="the logo for my company" />
                <img src={theRoastedBean} className='the-roasted-bean' alt='a logo for a coffee shop' />
                <img src={svenTheFjord} className='sven-the-fjord' alt="a logo for for a horse brand" />
                <img src={flintAndFlame} className='flint-and-flame' alt="the logo for a firewood company" />
                <img src={snowdrop} className='snowdrop' alt="a logo for for a skiing brand" />
                <img src={onward} className='onward' alt="the logo for a driverless car company" />
                <img src={pitch} className='pitch' alt="the logo for a music company" />
                <img src={pugIcon} className='pug-icon' alt='a design I made in Canva that is an app icon' />
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