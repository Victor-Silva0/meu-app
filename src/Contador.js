import React, { useState, useEffect } from 'react';
import './Contador.css';
import man from './homem.png';
import woman from './mulher.png';

export default function Contador() {
    return (
        <div>
  <h1 id="total">Total</h1>
  <h1 className="total">0</h1>
  <div className="container">
    <div id="espaco" className="column">
      <img src={man} />
      <p />
        <Buttons />
      <p>Homens</p>
    </div>
    <div className="column">
      <img src={woman} />
      <p />
        <Buttons />
      <p>Mulheres</p>
    </div>
  </div>
</div>
    );
    
    function Buttons() {
        const [counter, setCounter] = useState(0) 
    
    function handleClick1 () { 
      setCounter(counter + 1); 
    } 
    
    function handleClick2() {
        if (counter > 0 )
        {
            setCounter(counter - 1); 
        }
    }
    return (
        <>
        <button onClick={handleClick1} className="homem-plus"> + </button>
        <button onClick={handleClick2} className='homem-minus'> - </button>
        <h1 className="pessoa">{counter}</h1>
        </>
    )
    }
}