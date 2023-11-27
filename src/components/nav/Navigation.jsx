import "./navigation.css";
import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/logo-white-thick.png";

function Navigation() {
  const location = useLocation();
  const [showWebDevDropdown, setShowWebDevDropdown] = useState(false);
  const [showGraphicDesignDropdown, setShowGraphicDesignDropdown] = useState(false);
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
    <Navbar expand="lg" className="header-outer navbar">
      <Container className="header-inner responsive wrapper">
        <div className={`logo ${isScrolled ? "hidden" : ""}`}>
          <Link to="/">
            <img src={Logo} width={200} height={100} alt="Logo" />
          </Link>
        </div>
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
      </Container>
    </Navbar>
  );
}

export default Navigation;