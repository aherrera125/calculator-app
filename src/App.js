import './App.css';
import './styles/styles.css'
import { useState, Fragment, useRef } from 'react';
import Action from './components/actions/action'
import handleResult from "./helpers/math/result_handler";

function App() {
  const [num, setNum] = useState(0);
  const [firstNum, setFirstNum] = useState(null);
  const [secondNum, setSecondNum] = useState(null);
  const [typeOp, setTypeOp] = useState(null);

  const displayRef = useRef(null);  

  const handleSelectNum = (selectedNum) => {
    let currentValue = parseFloat(displayRef.current.value);
    setNum(currentValue === 0 ? selectedNum : num + selectedNum);
  };

  const handleTypeOp = (operation) => {
    setTypeOp(operation);
    if (displayRef.current && firstNum == null) {
      setFirstNum(parseFloat(displayRef.current.value));      
    }else{
      setSecondNum(parseFloat(displayRef.current.value));      
    }
    handleClear();
  };

  const handleClear = () => {
    setNum(0);
  };


  useRef(()=>{
    if (firstNum !== null && secondNum !== null && typeOp !== null) {
      calculate();
    }
  },[firstNum,secondNum,typeOp]);

  const calculate = () => {
    if (firstNum !== null && typeOp !== null) {
      const secondNumValue = parseFloat(displayRef.current.value);
      const result = handleResult(firstNum, secondNumValue, typeOp);
      if (result !== undefined) {
        setNum(result.toString());
        setFirstNum(null);
        setSecondNum(null);
        setTypeOp(null);
      }
    }
  };

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
          <button onClick={() => handleTypeOp('div')}>/</button>
        </div>
        <div>
          <button onClick={() => handleSelectNum('7')}>7</button>
          <button onClick={() => handleSelectNum('8')}>8</button>
          <button onClick={() => handleSelectNum('9')}>9</button>
          <button onClick={() => handleTypeOp('mult')}>*</button>
        </div>
        <div>
          <button onClick={() => handleSelectNum('4')}>4</button>
          <button onClick={() => handleSelectNum('5')}>5</button>
          <button onClick={() => handleSelectNum('6')}>6</button>
          <button onClick={() => handleTypeOp('less')}>-</button>
        </div>
        <div>
          <button onClick={() => handleSelectNum('1')}>1</button>
          <button onClick={() => handleSelectNum('2')}>2</button>
          <button onClick={() => handleSelectNum('3')}>3</button>
          <button onClick={() => handleTypeOp('add')}>+</button>
        </div>
        <div>
          <Action act="+/-"></Action>
          <button onClick={() => handleSelectNum('0')}>0</button>
          <Action act="."></Action>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
