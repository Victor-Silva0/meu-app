import React, { useState } from 'react';
import './Contador.css';
import man from './homem.png';
import woman from './mulher.png';

export default function Contador() {
  const [menCount, setMenCount] = useState(0);
  const [womenCount, setWomenCount] = useState(0);

  const totalCount = menCount + womenCount;

  return (
    <div>
      <h1 id="total">Total</h1>
      <h1 className="total">{totalCount}</h1> {}
      <div className="containerC">
        <div id="espaco" className="column">
          <img src={man} alt="Homem" />
          <p></p>
          <Buttons count={menCount} setCount={setMenCount} label="Homens" />
        </div>
        <div className="column">
          <img src={woman} alt="Mulher" />
          <p></p>
          <Buttons count={womenCount} setCount={setWomenCount} label="Mulheres" />
        </div>
      </div>
    </div>
  );
}

function Buttons({ count, setCount, label }) {
  function handleClick1() {
    setCount(count + 1);
  }

  function handleClick2() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <button onClick={handleClick1} className="plus"> + </button>
      <button onClick={handleClick2} className="minus"> - </button>
      <h1 className="pessoa">{count}</h1>
      <p>{label}</p>
    </>
  );
}
