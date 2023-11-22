import logo from "../../logo.svg";
import "./landing.css";
import Home from '../home/Home'

function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">
        <img src={logo} className="landing-logo" alt="logo" />
        <p>
          Hi! I'm Caitlin. A Full-Stack Developer, Graphic Designer, and
          Photographer.
        </p>
        <a
          className="home-link"
          href="Home"
          target="_blank"
          rel="noopener noreferrer"
        >
          See My Work
        </a>
      </header>
    </div>
  );
}

export default Landing;
