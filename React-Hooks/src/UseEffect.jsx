import  { useState, useEffect  } from "react";
import './App.css'

const UseState=() => {
  const [count, setCount] = useState(100);
  const [count1, setCount1] = useState(1000);

  // with variables
  
  // useEffect(()=> {
    
  //   console.log("from useEffect");
  //   document.title=`${count} new messages!!!`;

    
  // });

  useEffect(()=> {
    setCount1(200);
    console.log("from useEffect");

    return () =>{}
  }, [count1]);

  // useEffect(()=> {
  //   setCount1(200);
  //   console.log("from useEffect");
  // }, [count1]);

  console.log("count1 ouside hook", count1);
  return (
    <>
    <h1>count1:{count1}</h1>

    <button onClick={() => setCount((curr)=> curr + 1)}>Add</button> {/* Another method */}

    <button onClick={() => setCount1((curr)=> curr + 1)}>setCount1</button> {/* Another method */}
    </>
  )
}

export default UseState
