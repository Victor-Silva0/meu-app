import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Relogio from './Relogio';
import Letras from './Letras';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";


function Atv01() {
  return (
    <>
        <h1>Semana 01</h1>
            <React.StrictMode>
                <Relogio />
                <Letras />
            </React.StrictMode>
        <Link to="/">Retornar para a página inicial</Link>
    </>
  );
}

export default Atv01;
