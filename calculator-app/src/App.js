import './App.css';
import './styles/styles.css'
import Display from './components/display/display';
import Number from './components/numbers/number'
import Operation from './components/operations/operation'
import Action from './components/actions/action'

function App() {
  /*const showNumber = (newNumber)=>{
    setNumber(newNumber);
  }*/

  return (
    <div className="container">
      <div className="border">
        <div>
          <Display></Display>
        </div>
        <div>
          <Action act="%"></Action>
          <Action act="CE"></Action>
          <Action act="C"></Action>
          <Operation op="/" typeOp="div"></Operation>
        </div>
        <div>
          <Number num="7"></Number>
          <Number num="8"></Number>
          <Number num="9"></Number>
          <Operation op="*" typeOp="mult"></Operation>
        </div>
        <div>
          <Number num="4"></Number>
          <Number num="5"></Number>
          <Number num="6"></Number>
          <Operation op="-" typeOp="less"></Operation>
        </div>
        <div>
          <Number num="1"></Number>
          <Number num="2"></Number>
          <Number num="3"></Number>
          <Operation op="+" typeOp="add"></Operation>
        </div>
        <div>
          <Action act="+/-"></Action>
          <Number num="0"></Number>
          <Action act="."></Action>
          <Action act="="></Action>
        </div>
      </div>
    </div>
  );
}

export default App;
