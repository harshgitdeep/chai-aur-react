import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [count,setCounter] = useState(15)

  const addValue = () =>{
    if(count<20){
      count = count+1;
      setCounter(count)
    }
  }

  
  const decValue = () =>{
    if(count>0){
      count = count-1;
      setCounter(count)
    }
    
  }

  return (
    <>
     <h1>This is a counter react application</h1>
     <h3>Max value: 20 , Min value: 0</h3>
     <br />
     <h2>Current count: {count}</h2>

     <button onClick={addValue}>Increase</button>
     <button onClick={decValue}>Decrease</button>
    </>
  )
}

export default App
