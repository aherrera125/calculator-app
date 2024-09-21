import './App.css';
import './styles/styles.css'
import { useState, Fragment, useEffect } from 'react';
import Operation from './components/operations/operation'
import Action from './components/actions/action'

function App() {
  const [num, setNum] = useState();

  function handleSelectNum(selectedNum) {    
    setNum(selectedNum);    
  }

  useEffect(() => {    
  }, [num]);

  return (
    <Fragment>
      <div className="border">
        <div>
        <textarea readOnly value={num}></textarea>
        </div>
        <div>
          <Action act="%"></Action>
          <Action act="CE"></Action>
          <Action act="C"></Action>
          <Operation op="/" typeOp="div"></Operation>
        </div>
        <div>
          <button onClick={() => handleSelectNum('7')}>7</button>
          <button onClick={() => handleSelectNum('8')}>8</button>
          <button onClick={() => handleSelectNum('9')}>9</button>
          <Operation op="*" typeOp="mult"></Operation>
        </div>
        <div>
          <button onClick={() => handleSelectNum('4')}>4</button>
          <button onClick={() => handleSelectNum('5')}>5</button>
          <button onClick={() => handleSelectNum('6')}>6</button>
          <Operation op="-" typeOp="less"></Operation>
        </div>
        <div>
          <button onClick={() => handleSelectNum('1')}>1</button>
          <button onClick={() => handleSelectNum('2')}>2</button>
          <button onClick={() => handleSelectNum('3')}>3</button>
          <Operation op="+" typeOp="add"></Operation>
        </div>
        <div>
          <Action act="+/-"></Action>
          <button onClick={() => handleSelectNum('0')}>0</button>
          <Action act="."></Action>
          <Action act="="></Action>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
