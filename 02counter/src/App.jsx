import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)//initial value
  
  const addValue = () => {
    if (counter>=20) {
      alert('Max limit reached')
    }
    else{
      setCounter(counter+1)
    }
  }
  const removeValue = () => {
    //console.log('clicked', counter);
    //counter = counter + 1;
    if (counter<=0) {
      alert('negative not allowed')
    }
    else{
      setCounter(counter-1)
    }
  }
  return (
    <> 
      <h1>Vikram's React</h1>
      <h2>Counter Value: {counter}</h2>

    <button
    onClick={addValue}
    >Add Value</button><br>
    </br>
     
    <button
     onClick={removeValue}
    >Remove Value</button>
    <p>{counter}</p>
    </>
  )
}

export default App
