import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="w-screen h-screen duration-200" style={{backgroundColor : color}}>
      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-1 py-2 ' > 
      <div className='bg-white flex flex-wrap justify-center gap-4 inset-x-0 px-2 py-4 rounded-2xl'>
        <button onClick={() => setColor("red")} className='px-3 py-2 rounded-xl'
          style={{backgroundColor: "red"}}>Red</button>
       <button onClick={() => setColor("blue")} className='px-3 py-2 rounded-xl'
          style={{backgroundColor: "blue"}}>blue</button>
        <button onClick={() => setColor("green")} className='px-3 py-2 rounded-xl'
          style={{backgroundColor: "green"}}>Green</button>
        <button onClick={() => setColor("orange")} className='px-3 py-2 rounded-xl'
          style={{backgroundColor: "orange"}}>Orange</button>
        <button onClick={() => setColor("pink")} className='px-3 py-2 rounded-xl'
          style={{backgroundColor: "pink"}}>pink</button>
      </div>
      </div>
    </div>
  )
}

export default App
