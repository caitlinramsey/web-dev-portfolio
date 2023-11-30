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
            <ul>
              <li><a href="https://www.instagram.com/doubledowncreations/"><i className="fab fa-instagram instagram"></i></a></li>
              <li><a href="https://www.facebook.com/doubledowncreationsus"><i className="fab fa-facebook-f facebook"></i></a></li>
              <li><a href="https://www.tiktok.com/@doubledowncreations?lang=en"><i className="fab fa-tiktok tiktok"></i></a></li>
            </ul>
          </div>
        </Container>
      </header>
    </>
  );
}