import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "Susmita",
    age: 21
  }
  let newArr=[4,5,6,3]
  return (
    <>
      <h1 className='bg-yellow-900 rounded-xl p-4 text-4xl font-bold underline'>Tailwind Test</h1>
      <Card username="Hitesh"/>
      <Card username="Susmita"/>
    </>
  )
}

export default App
