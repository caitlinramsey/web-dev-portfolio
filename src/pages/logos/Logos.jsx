import './logos.css';
import { Slide } from "react-awesome-reveal";
import Container from "react-bootstrap/Container";
import pandaLogo from '../../assets/graphic-design/mockups/logos/bamboo-panda-conservation.webp';
import nordicFjordPhoto from '../../assets/graphic-design/mockups/logos/nordic-fjord-photo.webp';
import inItsPlace from '../../assets/graphic-design/mockups/logos/initsplace.webp';
import ddcLogo from '../../assets/graphic-design/mockups/logos/ddc-logo.webp';
import theRoastedBean from '../../assets/graphic-design/mockups/logos/the-roasted-bean.webp';
import svenTheFjord from '../../assets/graphic-design/mockups/logos/sven-the-fjord-pink.webp';
import flintAndFlame from '../../assets/graphic-design/mockups/logos/flint-and-flame.webp';
import snowdrop from '../../assets/graphic-design/mockups/logos/snowdrop.webp';
import onward from '../../assets/graphic-design/mockups/logos/onward.webp';
import pitch from '../../assets/graphic-design/mockups/logos/pitch.webp';
import pugIcon from '../../assets/graphic-design/mockups/logos/pug-icon.webp';
import rocketLogo from '../../assets/graphic-design/mockups/logos/rocketlogo.webp';
import balloonLogo from '../../assets/graphic-design/mockups/logos/balloon-logo.webp';

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