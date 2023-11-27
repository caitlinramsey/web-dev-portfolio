import "./navigation.css";
import { useEffect, useState } from "react";
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo-white-thick.png";

function Navigation() {
  const location = useLocation();
  const [showWebDevDropdown, setShowWebDevDropdown] = useState(false);
  const [showGraphicDesignDropdown, setShowGraphicDesignDropdown] =
    useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className="nav-outer navbar">
      <Container className="nav-inner responsive wrapper">
        <Row className="align-items-center">
          <Col xs="12" md='auto' lg="6" className="text-center text-lg-left mb-2 mb-lg-0">
            <div className={`logo ${isScrolled ? "hidden" : ""}`}>
              <Link to="/home">
                <img src={Logo} width={200} height={100} alt="Logo" />
              </Link>
            </div>
          </Col>
          <Col>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="navigation ml-auto">
                <Nav.Link
                  as={Link}
                  to="/home"
                  className={location.pathname === "/home" ? "active" : ""}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/about"
                  className={location.pathname === "/about" ? "active" : ""}
                >
                  About
                </Nav.Link>
                <NavDropdown
                  title="Web Development"
                  show={showWebDevDropdown}
                  onMouseEnter={() => setShowWebDevDropdown(true)}
                  onMouseLeave={() => setShowWebDevDropdown(false)}
                >
                  <NavDropdown.Item as={Link} to="/frontend">
                    Front-End Projects
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/backend">
                    Back-End Projects
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/webdevservices">
                    Services
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Graphic Design"
                  show={showGraphicDesignDropdown}
                  onMouseEnter={() => setShowGraphicDesignDropdown(true)}
                  onMouseLeave={() => setShowGraphicDesignDropdown(false)}
                >
                  <NavDropdown.Item as={Link} to="/graphicdesignprojects">
                    Projects
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/graphicdesignservices">
                    Services
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Navigation;