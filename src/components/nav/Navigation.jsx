import "./navigation.css";
import { Navbar, Container, Nav } from 'react-bootstrap';
import navLogo from '../../assets/logo-white-thick.png'
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' className="navigation p-2">
      <Container className='nav-tabs fw-bold'>
        <LinkContainer to='/'>
          <Navbar.Brand className='brand ps-3'>
            <img src={navLogo} width='180px' alt="logo" /></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/webdevprojects">
              <Nav.Link>Web Development Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/webdevservies">
              <Nav.Link>Web Development Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/graphicdesignprojects">
              <Nav.Link>Graphic Design Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/graphicdesignservices">
              <Nav.Link>Graphic Design Services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;