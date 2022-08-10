import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App';
import Contacto from './Contacto';
import Proyectos from './Proyectos';
import Columnas from './proyects/3Column';
import Qr from './proyects/Qr';
import Home from './proyects/Home';
// import Calculadora from './proyects/Calculadora';
import ToDoList from './proyects/ToDoList';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}/>
          <Route exact path="/portafolio" element={<Proyectos />} />
          <Route path="portafolio/qr" element={<Qr />} />
          <Route path="portafolio/columnas" element={<Columnas />} />
          {/* <Route path="portafolio/calculadora" element={<Calculadora />} /> */}
          <Route path="portafolio/to-do-list" element={<ToDoList />} />
          <Route path="/contacto" element ={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
