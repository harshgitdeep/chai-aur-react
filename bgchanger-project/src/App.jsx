import { useState } from "react"

function App() {

  const [color,setColor] = useState("pink")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <h1 className="text-5xl text-center font-bold drop-shadow-lg  text-white py-20">REACT BACKGROUND CHANGER</h1>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

    <div className="flex flex-wrap justify-center gap-3 drop-shadow-lg bg-white px-3 py-2 rounded-3xl">

      <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "red"}}>
      Red</button>

      <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor: "pink"}}>
      pink</button>

      <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "black"}}>
      black</button>

      <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "green"}}>
      green</button>
      
      <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{backgroundColor: "yellow"}}>
      yellow</button>

      <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor: "blue"}}>
      blue</button>

      <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor: "purple"}}>
  Purple</button>

<button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
  style={{backgroundColor: "orange"}}>
  Orange</button>

<button onClick={() => setColor("teal")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor: "teal"}}>
  Teal</button>

<button onClick={() => setColor("cyan")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
  style={{backgroundColor: "cyan"}}>
  Cyan</button>

<button onClick={() => setColor("magenta")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
  style={{backgroundColor: "magenta"}}>
  Magenta</button>

<button onClick={() => setColor("gray")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
  style={{backgroundColor: "gray"}}>
  Gray</button>

      
    </div>

    </div>
    </div>
  )
}

export default App
