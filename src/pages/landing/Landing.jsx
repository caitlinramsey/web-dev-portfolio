import logo from "../../ddc.svg";
import "./landing.css";

function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">
        <img src={logo} className="landing-logo" alt="logo" />
        <div className="main-landing">
          <h1>
            Hello! I'm Caitlin.
            <div className="roller">
              <span id="rolltext">
                Full-Stack Developer
                <br />
                Graphic Designer
                <br />
                Photographer
                <br />
              </span>
            </div>
          </h1>
        </div>
        <div className="enter-container">
          <a className='button home-link pt-5' href="home" rel="noopener noreferrer">
            <div className="button__line"></div>
            <div className="button__line"></div>
            <span className="button__text">ENTER</span>
            <div className="button__drow1"></div>
            <div className="button__drow2"></div>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Landing;
