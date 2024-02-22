import "./navigation.css";
import { useEffect, useState } from "react";
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logos/logo-white-thick.png";

function Navigation() {
  const location = useLocation();
  const [showWebDevDropdown, setShowWebDevDropdown] = useState(false);
  const [showGraphicDesignDropdown, setShowGraphicDesignDropdown] =
    useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

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

  const handleMobileMenuToggleClick = () => {
    setMobileMenuVisible(!mobileMenuVisible);
    setShowWebDevDropdown(false);
    setShowGraphicDesignDropdown(false);
  };

  const handleWebDevDropdownMouseEnter = () => {
    setShowWebDevDropdown(true);
    setShowGraphicDesignDropdown(false);
  };

  const handleWebDevDropdownMouseLeave = () => {
    setShowWebDevDropdown(false);
  };

  const handleGraphicDesignDropdownMouseEnter = () => {
    setShowGraphicDesignDropdown(true);
    setShowWebDevDropdown(false);
  };

  const handleGraphicDesignDropdownMouseLeave = () => {
    setShowGraphicDesignDropdown(false);
  };

  return (
    <Navbar expand="lg" className="nav-outer navbar">
      <Container className="nav-inner responsive wrapper">
        <Row className="align-items-center">
          <Col xs="12" lg="6" className="logo-col text-center text-lg-left mb-2 mb-lg-0">
            <div className={`logo ${isScrolled ? "hidden" : ""}`}>
              <Link to="/home">
                <img src={Logo} width={200} height={100} alt="Logo" />
              </Link>
            </div>
          </Col>
          <Col>
            <Navbar.Toggle onClick={handleMobileMenuToggleClick} />
            <Navbar.Collapse in={mobileMenuVisible} onExited={() => setMobileMenuVisible(false)}>
              <Nav className="navigation m-auto">
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
                  onMouseEnter={handleWebDevDropdownMouseEnter}
                  onMouseLeave={handleWebDevDropdownMouseLeave}
                >
                  <NavDropdown.Item as={Link} to="/frontend">
                    Front-End Projects
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/backend">
                    Back-End Projects
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/fullstack">
                    Full Stack Projects
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/webdevservices">
                    Services
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Graphic Design"
                  show={showGraphicDesignDropdown}
                  onMouseEnter={handleGraphicDesignDropdownMouseEnter}
                  onMouseLeave={handleGraphicDesignDropdownMouseLeave}
                >
                  <NavDropdown.Item as={Link} to="/advertising">
                    Advertising
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/logos">
                    Logos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/webdesign">
                    Web Design
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/printdesign">
                    Print Design
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/3Ddesign">
                    3-D Design
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