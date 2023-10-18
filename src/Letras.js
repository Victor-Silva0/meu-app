import React, { useState, useEffect } from 'react';
import './Letras.css';

function Texto() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const textoCompleto = "Venha estudar na Fatec";

    const timer = setTimeout(() => {
        if (index < textoCompleto.length) {
          setText(textoCompleto.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setIndex(0);
          setText("");
        }
      }, 1000);
      
      return () => {
        clearTimeout(timer);
      };
    }, [index]);

  return (
    <div id="text-container">
        <p>Letreiro: </p>
      {text}
    </div>
  );
}

export default Texto;
