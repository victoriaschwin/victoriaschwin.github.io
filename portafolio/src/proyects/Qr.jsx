import React from 'react';
import './Qr.css';

function Qr() {
  return (
    <div>
      <body className="background">
        <main>
          <div className="container">
            <div className="image">
              <img className="imageQR" src="./images/image-qr-code.png" alt="Default" />
            </div>
            <div className="title">
              <h1></h1>
              <h2>Improve your front-end 
              <br />skills by building projects
              </h2>
            </div>
            <div className="description">
              <p>Scan the QR code to visit Frontend 
              <br /> 
              Mentor and take your coding skills to 
              <br />the next level
              </p>
              </div>
            </div>
        </main>
        <footer>
          <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://github.com/victoriaschwin">Victoria Schwint</a>.
          </div>
        </footer>
      </body>
    </div>
  )
}

export default Qr