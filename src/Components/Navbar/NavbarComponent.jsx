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
        <Navbar.Brand as={Link} to='/' className='navText'>Jobs that Interest Me!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navText">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/riotgames'>Riot Games</Nav.Link>
            <Nav.Link as={Link} to='/nvidia'>Nvidia</Nav.Link>
            <Nav.Link as={Link} to='/unity'>Unity</Nav.Link>
            <Nav.Link as={Link} to='/intel'>Intel</Nav.Link>
            <Nav.Link as={Link} to='/tesla'>Tesla</Nav.Link>
            <Nav.Link as='a' target='_blank' href='https://docs.google.com/document/d/1BsNt0pA6x4iPjJU6Soek8_4LlBf6PHelSraQzN3oggo/edit?usp=sharing'>Aditional Links</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;