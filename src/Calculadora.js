import React, { useState } from 'react';
import './Calculadora.css';

const Calculator = () => {
  const [firstValue, setFirstValue] = useState('');
  const [isFirstValue, setIsFirstValue] = useState(false);
  const [secondValue, setSecondValue] = useState('');
  const [isSecondValue, setIsSecondValue] = useState(false);
  const [sign, setSign] = useState('');
  const [resultValue, setResultValue] = useState('0');

  const handleNumberClick = (el) => {
    if (!sign) {
      setFirstValue((prev) => {
        setResultValue(prev + el);
        return prev + el;
      });
    } else {
      setSecondValue((prev) => prev + el);
    }
  };

  const getSign = (value) => {
    return () => {
      setSign(value);
      setIsFirstValue(true);
      setResultValue('0'); // Reset resultValue when a sign button is clicked
    };
  };

  const handleEqualsClick = () => {
    let result = 0;
    if (sign === '+') {
      result = parseFloat(firstValue) + parseFloat(secondValue);
    } else if (sign === '-') {
      result = parseFloat(firstValue) - parseFloat(secondValue);
    } else if (sign === 'x') {
      result = parseFloat(firstValue) * parseFloat(secondValue);
    } else if (sign === '/') {
      result = parseFloat(firstValue) / parseFloat(secondValue);
    }
    setResultValue(result.toString());
    setFirstValue(result.toString());
    setSecondValue('');
    checkResultLength();
    setIsFirstValue(false); // Reset isFirstValue after calculation
  };

  const checkResultLength = () => {
    if (resultValue.includes('.') && resultValue.split('.')[1].length > 5) {
      setResultValue(parseFloat(resultValue).toFixed(5));
    }
  };

  const handleNegativeClick = () => {
    if (firstValue !== '') {
      setFirstValue((prev) => {
        const newValue = (parseFloat(prev) * -1).toString();
        setResultValue(newValue);
        return newValue;
      });
    }
  
    if (firstValue !== '' && secondValue !== '' && sign !== '') {
      setSecondValue((prev) => {
        const newValue = (parseFloat(prev) * -1).toString();
        setResultValue(newValue);
        return newValue;
      });
    }
  };

  const handlePercentClick = () => {
    if (firstValue !== '') {
      setFirstValue((prev) => {
        const newValue = (parseFloat(prev) / 100).toString();
        setResultValue(newValue);
        return newValue;
      });
    }
  
    if (firstValue !== '' && secondValue !== '' && sign !== '') {
      setSecondValue((prev) => {
        const newValue = (parseFloat(prev) / 100).toString();
        setResultValue(newValue);
        return newValue;
      });
    }
  };

  const handleCommaClick = () => {
    if (!firstValue.includes('.') && !isFirstValue) {
      setFirstValue((prev) => prev + '.');
    }
    if (!secondValue.includes('.') && secondValue !== '' && !isSecondValue) {
      setSecondValue((prev) => prev + '.');
    }
  };

  const handleClearClick = () => {
    setFirstValue('');
    setIsFirstValue(false);
    setSecondValue('');
    setIsSecondValue(false);
    setSign('');
    setResultValue('0');
  };

  return (
    <div className="calculator">
      <div className="result">
      <span>{parseFloat(resultValue)}</span>
      </div>
      <div className="buttons">
        <button className="item item1 clear" onClick={handleClearClick}>
          AC
        </button>
        <button className="item item1 negative" onClick={handleNegativeClick}>
          +/-
        </button>
        <button className="item percent sign" onClick={handlePercentClick}>
          %
        </button>
        <button className="item item3 sign" onClick={getSign('/')}>
          /
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('7')}>
          7
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('8')}>
          8
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('9')}>
          9
        </button>
        <button className="item item3 sign" onClick={getSign('x')}>
          X
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('4')}>
          4
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('5')}>
          5
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('6')}>
          6
        </button>
        <button className="item item3 sign" onClick={getSign('-')}>
          -
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('1')}>
          1
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('2')}>
          2
        </button>
        <button className="item numbers" onClick={() => handleNumberClick('3')}>
          3
        </button>
        <button className="item item3 sign" onClick={getSign('+')}>
          +
        </button>
        <button className="item itemZero numbers" onClick={() => handleNumberClick('0')}>
          0
        </button>
        <button className="item comma" onClick={handleCommaClick}>
          ,
        </button>
        <button className="item item3 equals" onClick={handleEqualsClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
