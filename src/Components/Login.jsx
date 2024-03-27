import React from 'react'
import { useLocation } from 'react-router-dom'

function Login() {
    let location = useLocation()
  return (
    <div>
     <h1>Login Page</h1> 
     <p>{location.state.st}</p>
    </div>
  )
}

export default Login
