import { Link } from "react-router-dom";
import React from 'react';
import Calculadora from './Calculadora';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Atv04() {
    return (
      <>
          <h1>Semana 04</h1>
          <React.StrictMode>
            <Calculadora />
            </React.StrictMode>
          <Link to="/">Retornar para a página inicial</Link>
      </>
    );
  }
  
  export default Atv04;