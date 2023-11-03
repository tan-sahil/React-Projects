import React from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const {setUser} = React.useContext(UserContext); 
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()

        setUser({username, password})
    }
  return (
    <div>
      <h2>Login Details</h2>
      <input type='text' placeholder='username' value={username}
        onChange={(e) => setUsername(e.target.value)}/>
      <input type='password' placeholder='password'value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <button onClick = {(e) => handleSubmit(e)}>Submit</button>
    </div>
  )
}

export default Login
