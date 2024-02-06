import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let count = 15

  const addValue = () =>{
    count= count+1;
  }

  return (
    <>
     <h1>This is a counter react application</h1>
     <h2>Current count: {count}</h2>

     <button onClick={addValue}>Increase</button>
     <button>Decrease</button>
    </>
  )
}

export default App
