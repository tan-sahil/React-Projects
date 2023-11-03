
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
     <h1 className=' bg-orange-500 text-3xl'>Use Context </h1>
     <Login/>
     <Profile/>
     </UserContextProvider>
  )
}

export default App
