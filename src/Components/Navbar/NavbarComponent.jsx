import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavbarComponent.css'
import React from 'react'

function NavbarComponent() {

  return (
    <Navbar expand="lg" className="navBarColor fixed-top">
      <Container>
        <Navbar.Brand href="#home">Jobs that Interest Me!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/riotgames'>Riot Games</Nav.Link>
            <Nav.Link as={Link} to='/nvidia'>Nvidia</Nav.Link>
            <Nav.Link as={Link} to='/unity'>Unity</Nav.Link>
            <Nav.Link as={Link} to='/intel'>Intel</Nav.Link>
            <Nav.Link as={Link} to='/tesla'>Tesla</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;