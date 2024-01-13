
import { useState } from 'react';
import './App.css'
import { getResultFromApi } from './feature/apiThunk'
 import {useSelector, useDispatch} from'react-redux'

function App() {
  const [id, setId] = useState(3);
  const dispatch = useDispatch();
  const dataFromApi = useSelector(state => state.data);
 
  const apiCall = (id)=>{
    
    dispatch(getResultFromApi(id));
  }

  return (
    <>
      <h1>redux thunk</h1>
      <button onClick={() => setId(prev => prev+ 1)} >changeID</button>
      <p>{id}</p>
      {dataFromApi.brand 
      }
      <button onClick={() =>apiCall(id)}>click to load</button>

      </>
  )
}

export default App
