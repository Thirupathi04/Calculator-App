import Keypad from './keypad.js';
import './App.css';
import { useState } from 'react';
function App(){
  let [input ,setInput]=useState("");
  function handleClick(value){
    setInput(input+value);
  }
  function calculate(value){
    setInput(eval(input));
  }
  function handleClear(){
    setInput("");
  }
  return (
    <div className="container-fluid">
      <h1>Calculator App</h1> 
      <div className="calculator">
        <input type='text' value={input} className="output"></input>
        <Keypad handleClick={handleClick} calculate={calculate} handleClear={handleClear}></Keypad>
      </div>
    </div>
  )
}
export default App;
