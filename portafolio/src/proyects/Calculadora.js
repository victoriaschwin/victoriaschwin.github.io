// import React from 'react';
// import './Calculadora.css';

// function Calculadora() {
      
//       let display = document.getElementById('display');
//       let valueDisplay = 0;
//       let value1 = 0;
//       let value2 = 0;
//       let operacionMatematica = '';


//       function pulsar(num) {
//         valueDisplay = valueDisplay * 10 + num;
//         actualizarDisplay();
//       }

//       function operacion(matematica) {
//         switch (matematica) {
//           case 'sumar':
//             value1 = valueDisplay;
//             operacionMatematica = 'sumar';
//             valueDisplay = 0;
//             break;
//           case 'restar':
//             value1 = valueDisplay;
//             operacionMatematica = 'restar';
//             valueDisplay = 0;
//             break;
//           case 'dividir':
//             value1 = valueDisplay;
//             operacionMatematica = 'dividir';
//             valueDisplay = 0;
//             break;
//           case 'multiplicar':
//             value1 = valueDisplay;
//             operacionMatematica = 'multiplicar';
//             valueDisplay = 0;
//             break;
//         }
//       }

//       function resultado() {
//         value2 = valueDisplay;

//         if (operacionMatematica === 'sumar') {
//           valueDisplay = value1 + value2;
//           actualizarDisplay();
//         } else if (operacionMatematica === 'restar') {
//           valueDisplay = value1 - value2;
//           actualizarDisplay();
//         } else if (operacionMatematica === 'dividir') {
//           valueDisplay = value1 / value2
//           actualizarDisplay();
//         } else {
//           valueDisplay = value1 * value2;
//           actualizarDisplay();
//         }
//       }

//       function actualizarDisplay() {
//         display.innerText = valueDisplay;
//       }

//       function resetDisplay() {
//         valueDisplay = 0;
//         actualizarDisplay();
//       }

//       function reset() {
//         valueDisplay = 0;
//         value1 = 0;
//         value2 = 0;
//         operacionMatematica = '';
//         actualizarDisplay();
//       }

//       function retro() {
//         valueDisplay = valueDisplay.toString().slice(0,-1);
//         actualizarDisplay();
//       }

//       function decimal() {

//       }
//   return (
//     <div>
//       <body>
//         <div className="calculadora">
//           <div className="displayCol">
//             <span id={display} type="text" className="display"></span>
//           </div>

//           <div className="botonesEspeciales">
//             <button className="btn btn-secondary" id='botonEspecial' onClick={retro}>Retr</button>
//             <button className="btn btn-secondary" id='botonEspecial' onClick={resetDisplay}>CE</button>
//             <button className="btn btn-secondary" id='botonEspecial' onClick={reset}>C</button>
//           </div>

//           <div className="container">
//             <button className="btn btn-secondary" onClick={()=>pulsar(7)}>7</button>
//             <button className="btn btn-secondary" onClick={()=>pulsar(8)}>8</button>
//             <button className="btn btn-secondary" onClick={()=>pulsar(9)}>9</button>
//             <button className="btn btn-secondary" id='colorBackground' onClick={()=>operacion('dividir')}>/</button>
//             <button className="btn btn-secondary" onClick={()=>pulsar(4)}>4</button>
//             <button className="btn btn-secondary" onClick={()=>pulsar(5)}>5</button>
//             <button className="btn btn-secondary" onClick={()=>pulsar(6)}>6</button>
//             <button className="btn btn-secondary" id='colorBackground' onClick={()=>operacion('multiplicar')}>*</button>
//             <button className="btn btn-secondary" onClick={()=>pulsar(1)}>1</button>
//             <button className="btn btn-secondary" onClick={()=>pulsar(2)}>2</button>
//             <button className="btn btn-secondary" onClick={()=>pulsar(3)}>3</button>
//             <button className="btn btn-secondary" id='colorBackground' onClick={()=>operacion('restar')}>-</button>
//             <button className="btn btn-secondary" id='colorBackground' onClick={decimal}></button>
//             <button className="btn btn-secondary" onClick={()=>pulsar(3)}>0</button>
//             <button className="btn btn-secondary" id='colorBackground' onClick={()=>operacion('sumar')}>+</button>
//             <button className="btn btn-secondary" id='naranja' onClick={resultado}>=</button>
//           </div>
//           <footer>
//             <span>Enlace al repositorio de <a href='#'>Github</a></span>
//           </footer>
//         </div>
//       </body>
//     </div>
//   )
// }

// export default Calculadora