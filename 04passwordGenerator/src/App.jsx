import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'
import { useReducer } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str = str + "0123456789";
    if(characterAllowed) str += "!@#$%^&*";

    for(let i = 1; i <= length; i++){
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass)
  },
     [length, numberAllowed, characterAllowed, setPassword])

     // now using useEffect to make it work
     useEffect(()=> {
      passwordGenerator()
     }, [length, numberAllowed, characterAllowed, setPassword])

  return (
    <>
     <div className=' w-full max-w-md  m-auto rounded-lg' style={{backgroundColor : "grey"}}>
      <div className='flex justify-center'>
      <input className=' w-96 mt-2 px-2 py-1 m-auto rounded-xl'  type='text'
        value={password}
        name='password'
        ref={passRef}
        readOnly
        />
        <button className='pt-2 px-2 py-1 mt-2 rounded-xl m-1 text-center'
        style={{backgroundColor: "blue", color: "whitesmoke"}}
        onClick={() => {
          passRef.current?.select()
          // for selecting to a range
          passRef.current?.setSelectionRange(0, 3)
          window.navigator.clipboard.writeText(password)
        }
        }>copy</button>
      </div>
        <div className='flex  justify-center gap-x-1'>
          <input type='range' onChange={(e)=> setLength(e.target.value)} value={length} min={8} max={40}/>
          <label>length {length}</label>
          <input type='checkbox'
            value={numberAllowed}
            id='number'
            onChange={() =>{setNumberAllowed(prev => !prev)}}/>
          <label htmlFor="number">number</label>
          <input type='checkbox'
            value={characterAllowed}
            id='char'
            onChange={() =>{setCharacterAllowed(prev => !prev)}}/>
          <label htmlFor="char">character</label>
          
        </div>
     </div>
    </>
    
  )
}

export default App
