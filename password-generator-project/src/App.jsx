import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  //callback
  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+= "0123456789"
    if(charAllowedAllowed) str+= "!@#$%^&*()"

    for(let i=1;i<=Arraylength;i++){
      let idx = Math.floor(Math.random()*str.length + 1)
      let pass =  str.charAt(idx)
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  return (
    <>
     <h1 className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gra'>test</h1>
    </>
  )
}

export default App
