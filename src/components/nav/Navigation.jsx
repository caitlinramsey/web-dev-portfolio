import "./navigation.css";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import navLogo from '../../assets/logo-white-thick.png'
import { menuItemsData } from "../../menuItemsData";
import MenuItems from '../menu/MenuItems';

function Navigation() {
  const depthLevel = 0;

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
          <nav className="desktop-nav">
            <ul className="menus">
              {menuItemsData.map((menu, index) => {
                return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
              })}
            </ul>
          </nav>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar >
  );
};

export default Navigation;