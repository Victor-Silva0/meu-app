import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import Profile  from "./Gallery";
import TodoList from "./Todo";
import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PackingList from "./PackingList";
import List from "./List";
import TeaGathering from "./Teaparty";

function Atv03() {
    return (
      <>
          <h1>Semana 03</h1>
          <React.StrictMode>
                <Profile />
                <hr></hr>
                <TodoList />
                <hr></hr>
                <PackingList />
                <hr></hr>
                <List />
                <hr></hr>
                <TeaGathering />
            </React.StrictMode>
          <Link to="/">Retornar para a página inicial</Link>
      </>
    );
  }
  
  export default Atv03;