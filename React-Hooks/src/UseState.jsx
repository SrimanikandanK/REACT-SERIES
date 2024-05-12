import  { useState } from "react";
import './App.css'

const UseState=() => {
  const [count, setCount] = useState(0)

  function increaseCounter(){
    setCount(count + 1);
  }

  return (
    <>
    <h1>Counter: {count}</h1>
    <button onClick={increaseCounter}>Increase</button>

    <button onClick={() => setCount((curr)=> curr + 1)}>Add</button> {/* Another method */}
    </>
  )
}

export default UseState
