import  { useState,useRef, useEffect  } from "react";
import './App.css'

const UseRefComponent =() => {
  const [input, setInput] = useState("");

  const inputRef =useRef();

  console.log("Getting Rendered")

  useEffect(()=>{
    console.log("From useEffect");
    inputRef.current=input;
  },[input])

  const display=()=>{
    console.log("display",inputRef.current);
    // inputRef.current.focus();
  };


  return (
    <>
    <input 
    ref={inputRef} 
    type="text"
     value={input} onChange={e=>setInput(e.target.value)}
     />
    <p>My name is from usestate: {input} </p>
    

    {/* Actually in below once rendered from that value only after the next value will get set there */}
    <p> My name is from useRef: {inputRef.current}</p>

    <button onClick={display}>Show Input</button> 

    </>
  )
}

export default UseRefComponent
