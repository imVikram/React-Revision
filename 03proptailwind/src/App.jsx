import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj= {
    name:"Vikram Singh",
    age:20
  }

  let myNewArr=[1,2,3,4]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>

    
    <Card username="Mellissa" btnText="Click Profile"/>
    <Card username="lara"/>
    </>
  )
}

export default App
