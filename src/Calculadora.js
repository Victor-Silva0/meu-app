import './Calculadora.css';

export default function calc() {
    return (
        <div className="calc">

        <div className="container">
  <div className="result">
    <span>0</span>
  </div>
  <div className="buttons">
    <button className="item item1 clear">AC</button>
    <button className="item item1 negative" value="*-1">
      +/-
    </button>
    <button className="item percent sign" value="%">
      %
    </button>
    <button className="item item3 sign" value="/">
      /
    </button>
    <button className="item numbers" value={7}>
      7
    </button>
    <button className="item numbers" value={8}>
      8
    </button>
    <button className="item numbers" value={9}>
      9
    </button>
    <button className="item item3 sign" value="x">
      X
    </button>
    <button className="item numbers" value={4}>
      4
    </button>
    <button className="item numbers" value={5}>
      5
    </button>
    <button className="item numbers" value={6}>
      6
    </button>
    <button className="item item3 sign" value="-">
      -
    </button>
    <button className="item numbers" value={1}>
      1
    </button>
    <button className="item numbers" value={2}>
      2
    </button>
    <button className="item numbers" value={3}>
      3
    </button>
    <button className="item item3 sign" value="+">
      +
    </button>
    <button className="item itemZero numbers" value={0}>
      0
    </button>
    <button className="item comma">,</button>
    <button className="item item3 equals">=</button>
  </div>
</div>



const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector(".clear");
const negative = document.querySelector('.negative');
const percent = document.querySelector(".percent");
const comma = document.querySelector(".comma");

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

</div>
);
for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false) {
            getFirstValue(atr)
        }
        if(isSecondValue == false) {
            getSecondValue(atr);
        }
    })
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el) {
    if(firstValue != "" && sign != "") {
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign() {
    for(let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if(sign === "+") {
        resultValue = firstValue + secondValue;
    }
    else if(sign === "-") {
        resultValue = firstValue - secondValue;
    }
    else if(sign === "x") {
        resultValue = firstValue * secondValue;
    }
    else if(sign === "/") {
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
    
    checkResultLength();
})

function checkResultLength() {
    resultValue = JSON.stringify(resultValue);
    
    if(resultValue.length >= 8 )
    {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != "") {
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != "") {
        resultValue = -resultValue;
    }
    result.innerHTML = resultValue;
})

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != "") {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != "") {
        resultValue = resultValue / 100;
    }
    result.innerHTML = resultValue;
})

comma.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != "") {
        resultValue = firstValue + ".";
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != "") {
        resultValue = resultValue + ".";
    }
    result.innerHTML = resultValue;
})

clear.addEventListener('click', () => {
    result.innerHTML = 0;
    
    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
})
}