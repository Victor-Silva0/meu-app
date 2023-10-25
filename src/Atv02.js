import { Link } from "react-router-dom";
import Contador from "./Contador";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


function Atv02() {
    return (
      <>
          <h1>Semana 02</h1>
          <React.StrictMode>
                <Contador />
            </React.StrictMode>
          <Link to="/">Retornar para a página inicial</Link>
      </>
    );
  }
  
  export default Atv02;
  