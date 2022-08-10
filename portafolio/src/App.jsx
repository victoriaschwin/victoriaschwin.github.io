import { useState } from 'react';
import {Link, Outlet} from 'react-router-dom';
import { Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

import Logo from './assets/logo.svg'



function App() {

  return (
    <>

     
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/portafolio' className='nav-link'>Proyectos</Link>
            <Link to='/contactos' className='nav-link'>Contacto</Link>
        </Nav>
        <Button variant="outline-secondary">ES</Button>
        <Button variant="outline-secondary">EN</Button>
        </Container>
        
      </Navbar>
      
      
        <Outlet />
      
    </>
  )
}

export default App
