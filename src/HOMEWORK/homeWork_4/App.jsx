import React, { useReducer, useState } from 'react'
import reducer, { initialState } from './reducer'
 import "./App.css"

function App() {

const [count, setCount]= useState(0);
const handleClick = () => {
    setCount(item => item + 1);
  };


    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1> {state.join(", ")}</h1>
      
      <h2> Count:{count}</h2>
      <button onClick = {handleClick}>Click</button>
      <button onClick={() => dispatch({type: "add", payload:Math.floor(Math.random() * 100) })}>add</button>
      <button onClick={() => dispatch({type: "sort"})}> sort</button>
      <button onClick={() => dispatch({type: "min"})}> min</button>
      <button onClick={() => dispatch({type:"square"})}>square</button>
    </div>
  )
}

export default App
