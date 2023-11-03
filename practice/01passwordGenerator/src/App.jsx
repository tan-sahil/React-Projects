
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const[password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numberSelected, setNumberSelected] = useState(false)
  const [characterSelected, setCharacterSelected] = useState(false)
  const passRef = useRef()
  const generatePassword = () => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberSelected){ string += "1234567890" 
      console.log('value')}
    if(characterSelected) string += "!@#$%^&*()"
    for(let i = 1; i < length ; i++){
      const index = Math.floor(Math.random()* string.length + 1)
      pass += string.charAt(index);
    }
    setPassword(pass);
  }
  useEffect(() =>{
    generatePassword()
  }, [length, characterSelected, numberSelected])

  // copying to the clipboard

  const selectedToClipBoard = (e) =>{
      window.navigator.clipboard.writeText(password)
      passRef.current?.select()
  }
  return (
    <>
     <h1 className=' bg-orange-500 text-3xl rounded-3xl'>passwod generator</h1>
     <div className='  max-w-md h-48 bg-orange-700 rounded-2xl  m-auto mt-4'>
      <div className=' flex flex-nowrap justify-center gap-1'>
        <input type='text' placeholder='eneter password'
        className=' w-full  inline-block bg-white rounded-xl text-3xl mt-2 ml-2'
        value={password}
        ref={passRef}
        readOnly
         />
        <button className=' border text-xl bg-green-300 mt-2 rounded-xl mr-2'
          onClick={(e) => selectedToClipBoard(e)}> Copy</button>
      </div>
      <div className='flex flex-nowrap mt-5 gap-2 '>
       
       <input type='range'
        min = '8' max = '20' id='length'
        value={length}
        onChange={(e)=> setLength(e.target.value)}/> <label htmlFor='length'>Length {length}</label>
        
        <input type='checkbox'  id='number' 
        value={numberSelected}
        onChange={() => setNumberSelected(prev => !prev)}/><label htmlFor='number'>Number </label>
        <input type='checkbox' value={characterSelected} 
        onChange={() => setCharacterSelected(prev => !prev)}/><label>character</label>
      </div>
     </div>
    </>
  )
}

export default App
