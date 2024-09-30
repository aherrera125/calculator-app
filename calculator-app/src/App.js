import './App.css';
import './styles/styles.css'
import { useState, Fragment, useRef } from 'react';
import Action from './components/actions/action'

function App() {
  const [num, setNum] = useState();
  const displayRef = useRef(null);
  var firstNum;
  var SecondNum;
  var typeOp;
  var result;

  const handleSelectNum = (selectedNum) => {
    setNum(selectedNum);
  }

  const handleTypeOp = (operation) => {
    assignNumbers();
    typeOp = operation;
  }

  const handleClear = () => {
    setNum("");
  }

  const assignNumbers=()=>{
    !firstNum ? firstNum = parseFloat(displayRef.current.value) : firstNum = "";
  }  

  const handleResult = () => {
    SecondNum = parseFloat(displayRef.current.value);
    switch (typeOp) {
      case "add":
        result = parseFloat(firstNum) + parseFloat(SecondNum);
        setNum(result);
        firstNum = "";
        break;
      case "less":
        result = parseFloat(firstNum) - parseFloat(SecondNum);
        setNum(result);
        firstNum = "";
        break;
      case "mult":
        result = parseFloat(firstNum) * parseFloat(SecondNum);
        setNum(result);
        firstNum = "";
        break;
      case "div":
        if (parseFloat(SecondNum) !== 0) {
          result = parseFloat(firstNum) / parseFloat(SecondNum);
          setNum(result);
          firstNum = "";
        } else {
          alert("Connot divide by zero!");
          handleClear();
        }
        break;
    }
  }

  return (
    <Fragment>
      <div className="border">
        <div>
          <textarea readOnly value={num} ref={displayRef}></textarea>
        </div>
        <div>
          <Action act="%"></Action>
          <button onClick={handleClear}>CE</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleTypeOp('div')}>/</button>
        </div>
        <div>
          <button onClick={() => handleSelectNum('7')}>7</button>
          <button onClick={() => handleSelectNum('8')}>8</button>
          <button onClick={() => handleSelectNum('9')}>9</button>
          <button onClick={handleTypeOp('mult')}>*</button>
        </div>
        <div>
          <button onClick={() => handleSelectNum('4')}>4</button>
          <button onClick={() => handleSelectNum('5')}>5</button>
          <button onClick={() => handleSelectNum('6')}>6</button>
          <button onClick={handleTypeOp('less')}>-</button>
        </div>
        <div>
          <button onClick={() => handleSelectNum('1')}>1</button>
          <button onClick={() => handleSelectNum('2')}>2</button>
          <button onClick={() => handleSelectNum('3')}>3</button>
          <button onClick={handleTypeOp('add')}>+</button>
        </div>
        <div>
          <Action act="+/-"></Action>
          <button onClick={() => handleSelectNum('0')}>0</button>
          <Action act="."></Action>
          <button onClick={handleResult}>=</button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
