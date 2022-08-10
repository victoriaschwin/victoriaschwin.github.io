import React from 'react';
import {Row, Container, Card, Col, Button} from 'react-bootstrap';
import './Proyectos.css';
import QrImagen from './assets/pictures/mobile-qr.jpg';
import {Link} from 'react-router-dom';

function Proyectos() {
  return (
    <div>
      <Container className='containerProject'>
        <Row>
          <h1>Front-end Mentor</h1>
          <Col xl={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={QrImagen} />
              <Card.Body>
                <Card.Title>Componente Qr</Card.Title>
                <Card.Text>
                  Componente Qr estático creado con HTML y CSS.
                </Card.Text>
                <Button variant="primary">
                <Link to="qr">Ver</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Layout Responsive</Card.Title>
                <Card.Text>
                  Layout responsive de 3 columnas a 1 sola.
                </Card.Text>
                <Button variant="primary">
                <Link to="/">Ver</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./assets/pictures/image-qr-code.png" />
              <Card.Body>
                <Card.Title>Web E-commerce </Card.Title>
                <Card.Text>
                  Simulador de una web para un e-commerce creada con ReactJs y React-Bootstrap.
                </Card.Text>
                <Button variant="primary">
                <Link to="/">Ver</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <h1>Javascript</h1>
          <Col xl={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./assets/pictures/image-qr-code.png" />
              <Card.Body>
                <Card.Title>Calculadora</Card.Title>
                <Card.Text>
                  Calculadora hecha con Javascript Vainilla y Bootstrap.
                </Card.Text>
                <Button variant="primary">
                <Link to="/">Ver</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./assets/pictures/image-qr-code.png" />
              <Card.Body>
                <Card.Title>API</Card.Title>
                <Card.Text>
                  Componente API, utiliza.....
                </Card.Text>
                <Button variant="primary">
                <Link to="/">Ver</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./assets/pictures/image-qr-code.png" />
              <Card.Body>
                <Card.Title>To Do List</Card.Title>
                <Card.Text>
                  App web para organizar tareas creada con ReactJs.
                </Card.Text>
                <Button variant="primary">
                <Link to="to-do-list">Ver</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Proyectos