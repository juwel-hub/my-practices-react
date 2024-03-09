import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from'./counter'
import Mobile from './makepro'
import Recap from './Another'

function App() {
  const [count,setCount]=useState(0)
  const CountStyle={
    border:'2px solid yellow',
    padding:'20px',
    borderRadius:'15px'
  }
 
  const TestingAdd=()=>{
    const newCount=count+1
    setCount(newCount)
    
  }
 
  const handleReduce=()=>{
     setCount(count-1)
  }
  return (
    <>
    <Recap></Recap>
    <Mobile></Mobile>
    <Counter></Counter>
     <div style={CountStyle}>
     <h1>Count: {count} </h1>
      <button onClick={TestingAdd}>Add</button>
      <button onClick={handleReduce}>reduce</button>
     </div>
    </>
  )
}

export default App
