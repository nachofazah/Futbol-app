import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pelota from './pelota.jpg'




const Header = () => {
 
    return ( 
        <Navbar expand="lg" className="header">
        <Container>
          <Navbar.Brand href="#">
            <img src={pelota} className='iconoh'/>Furvoshow
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Partidos">Partidos hoy</Nav.Link>
              <Nav.Link href="#Liga">Liga</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
      
     );
}
 
export default Header;