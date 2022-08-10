import React, {useState} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import styled from 'styled-components';

const Titulo = styled.span`
font-size: 2rem;
color: gray;
padding: 1rem;
margin: 1rem;

`;

const Contenedor = styled.div`
background-color: gray;
margin:0.5rem;
padding: 0.5rem;
border-radius: 5px;

`;

const Input = styled.input`
border: none;
margin: 0.5rem;
padding: 0.5rem;
inline-height: 1.2rem;
font-size: 1.2rem;
`

function ToDoList() {
  const [listaTareas, setListaTareas] = useState([]);
  const [tarea, setTarea] = useState('')

  function nuevaTarea() {
    setListaTareas([...listaTareas,tarea]);

  }

  function eliminaTarea(index) {
    console.log(index)
    let nuevaLista = [...listaTareas];
    console.log(nuevaLista);

    let listaFinal = nuevaLista.splice(index,1)
    
    setListaTareas(listaFinal);
    console.log(listaFinal, 'resultado')
    // o con un filter
  }

  return (
    <div>

      <Row>
        <Col >
          <Titulo>Tarea</Titulo>
          <br />
          
          <Input
            type="text"
            value={ tarea }
            onChange={(e) => setTarea(e.target.value)}
          />
          <Button variant="light" onClick={nuevaTarea}>Agregar</Button>
          
        </Col>
        <Col>
        <Titulo>Lista de Tareas </Titulo>
          <div>{listaTareas.map((elemento,index) => 
          <Contenedor key={index}>
          {elemento}
          <Button onClick={()=>eliminaTarea(index)}>x</Button>
          </Contenedor>)}</div>
        </Col>
      </Row>

      
    </div>
  )
}

export default ToDoList