import { useState } from 'react'
import './App.css'

function App() {


  const [counter, setCounter]  = useState(15)

  const addValue = () => {
    setCounter(counter + 1)


    //Output= if 4 taken it gives=8
    // setCounter(prevcounter => prevcounter+ 1)
    // setCounter(prevcounter => prevcounter+ 1)
    // setCounter(prevcounter => prevcounter+ 1)
    // setCounter(prevcounter => prevcounter+ 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>!!Counting_Counting!!</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App