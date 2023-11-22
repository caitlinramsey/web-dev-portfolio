import logo from "../../ddc.svg";
import "./landing.css";

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
          href="home"
          rel="noopener noreferrer"
        >
          Enter
        </a>
      </header>
    </div>
  );
}

export default Landing;
