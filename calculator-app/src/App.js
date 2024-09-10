import './App.css';
import Number from './components/number'
import Operation from './components/operations';
import Action from './components/actions'

function App() {
  return (
    <div className="container">
      <div className="border">
        <div>
          <textarea readonly id="display"></textarea>
        </div>
        <div>
          <Action act="percentage">%</Action>
          <Action act="clearCE">CE</Action>
          <Action act="clearC">C</Action>
          <Operation typeOp="div">/</Operation>
        </div>
        <div>
          <Number num="7">7</Number>
          <Number num="8">8</Number>
          <Number num="9">9</Number>
          <Operation typeOp="mult">*</Operation>
        </div>
        <div>
          <Number num="4">4</Number>
          <Number num="5">5</Number>
          <Number num="6">6</Number>
          <Operation typeOp="less">-</Operation>
        </div>
        <div>
          <Number num="1">1</Number>
          <Number num="2">2</Number>
          <Number num="3">3</Number>
          <Operation typeOp="add">+</Operation>
        </div>
        <div>
          <Action act="changeSign">+/-</Action>
          <Number num="0">0</Number>
          <Action act="comma">.</Action>
          <Action act="result">=</Action>
        </div>
      </div>
    </div>
  );
}

export default App;
