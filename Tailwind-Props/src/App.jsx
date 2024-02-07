import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
     <h1 className='bg-green-400 text-black p-6 rounded-xl mb-5'>Hello World!</h1>
    <Card userName="Harsh "/>
    </>
  )
}

export default App
