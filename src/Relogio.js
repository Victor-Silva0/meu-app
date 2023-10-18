import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hora = time.getHours().toString().padStart(2, '0');
  const minuto = time.getMinutes().toString().padStart(2, '0');
  const segundo = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="clock">
      <p>Relógio:</p>
      <p>{`${hora}:${minuto}:${segundo}`}</p>
    </div>
  );
}

export default Clock;
