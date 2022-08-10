import React from 'react';
import { Button, ButtonGroup, ButtonToolbar, Container, Row } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div>
      <Container className='containerHome'>
        <Row>
          <h1>Victoria Schwint</h1>
        </Row>

        <Row>
          <p>Soy una desarrolladora argentina que actualmente vive en Barcelona. Estudié arte pero después descubrí el
            mundo IT y me entusiasmó el ambiente de inovación y diseño de este area.
            Escribo mi código con Javascript y utilizo React, NodeJS, Firebase, SQL y Bootstrap para mis proyectos.
            Enfoco mi código a crear una buena experiencia del usuario independientemente del dispositivo que utilicen.</p>
        </Row>

        <Row>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="social-media" aria-label="Social Media Links">
              <Button>Icono Github</Button>
              <Button>Icono LinkedIn</Button>
              <Button>Icono Fb</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Row>

      </Container>




    </div>
  )
}

export default Home