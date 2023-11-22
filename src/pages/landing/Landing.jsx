import logo from "../../logo.svg";
import "./landing.css";

function Landing() {
  <div className="landing">
    <header className="landing-header">
      <img src={logo} className="landing-logo" alt="logo" />
      <p>
        Hi! I'm Caitlin. A Full-Stack Developer, Graphic Designer, and
        Photographer.
      </p>
      <a
        className="Home-link"
        href="/Home"
        target="_blank"
        rel="noopener noreferrer"
      >
        See My Work
      </a>
    </header>
  </div>;
}

export default Landing;
