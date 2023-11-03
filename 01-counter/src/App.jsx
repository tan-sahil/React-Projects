import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const addValue = () =>{
  if(count < 20){
    setCount(count + 1);
  }
}

const removeValue = () =>{
  if(count >= 1){ 
    setCount(count -1);
  }
}
  return (
    <>
      <div>
      <h1>Hello useState usage </h1>
      <h2>changing valu of count {count}</h2>

      <button onClick={addValue}>Add</button>
      <br/>
      <button onClick={removeValue}>remove</button>
      </div>
     
    </>
  )
}

export default App
