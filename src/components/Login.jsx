import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'

function Login({clickHandler , setEmail , setPass}) {

  return (
    <div>
        <h1>LogIn Details</h1> 
      <form onSubmit={clickHandler}>
       <label>
         email: 
        <input type="email" name='email' onChange={(e) => setEmail(e.target.value) }></input>
      </label>
       <label>
        Password: 
       </label>
       <input type="password" onChange={(e) => setPass(e.target.value) }></input>
       <input type="submit" value="submit"></input>
      </form>
    </div>
  )
}

export default Login