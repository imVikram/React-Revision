import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password,SetPassword]  = useState("")

  const PasswordGenerator = () => {
    
  }

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
