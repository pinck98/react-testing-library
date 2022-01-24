import React, {useState} from "react";

export default function Index() {
  const [counter,setCounter] = useState(0)
  const [inputVal,setInputVal] = useState(1)

  const increase = () => {
    setCounter(counter + inputVal)
  }
  const decrease = () => {
    setCounter(counter - inputVal)
  }
  const setInput = (e) => {
    setInputVal(parseInt(e.target.value))
  }

  return (
    <>
      <h1 data-testid="header">Counter and test</h1>
      <h3 data-testid="counter" style={{color : counter >= 100 ? 'green' : counter <= -100 ? 'red' : 'black'}}>{counter}</h3>
      <button data-testid="increase-button" onClick={increase}>increase</button>
      <input type="number" data-testid="input" value={inputVal} onChange={setInput}></input>
      <button data-testid="decrease-button" onClick={decrease}>decrease</button>
    </>
  );
}
