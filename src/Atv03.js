import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import Profile  from "./Gallery";
import TodoList from "./Todo";
import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Atv03() {
    return (
      <>
          <h1>Semana 03</h1>
          <React.StrictMode>
                <Profile />
                <hr></hr>
                <TodoList />
            </React.StrictMode>
          <Link to="/">Retornar para a página inicial</Link>
      </>
    );
  }
  
  export default Atv03;