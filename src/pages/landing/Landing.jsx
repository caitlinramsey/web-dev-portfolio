import logo from "../../ddc.svg";
import "./landing.css";

function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">
        <img src={logo} className="landing-logo" alt="logo" />
        <div className="main-landing">
          <h1>
            Hello! I'm Caitlin. A
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
        <a className="home-link" href="home" rel="noopener noreferrer">
          Enter
        </a>
      </header>
    </div>
  );
}

export default Landing;
