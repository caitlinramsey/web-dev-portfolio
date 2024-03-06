import "./home.css";
import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <>
      <header id="header">
        <Container>
          <div className="header-container text-center">
            <h4>Hello I'm</h4>
            <h1>Caitlin Ramsey</h1>
            <div id='code-gif' align='center'>
              <img src="https://media.giphy.com/media/igRW3jH2LcCVzMqi5F/giphy.gif" width="300" alt="gif that says I'm a code blooded programmer" />
            </div>
            <h4 className="my-desc">
              Full-Stack Developer | Graphic Designer | Photographer
            </h4>
            <hr
              style={{
                background: "black",
                color: "black",
                borderColor: "black",
                height: "3px",
                opacity: "1",
              }}
            />
            <div className="social-media">
              <ul>
                <li><a href="https://www.linkedin.com/in/caitlin-ramsey/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="https://www.facebook.com/doubledownc"><i className="fab fa-facebook-f facebook"></i></a></li>
                <li><a href="https://github.com/caitlinramsey"><i class="fa-brands fa-github"></i></a></li>
              </ul>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}