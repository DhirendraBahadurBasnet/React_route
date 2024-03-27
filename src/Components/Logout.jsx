import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Logout() {
    let navigate= useNavigate()
   let location = useLocation()
  return (
    <div>
      <h1>Logout</h1>
      <h1>{location.state.name} Logged Out!</h1>
      <button className='mt-4 px-4 py-3 bg-cyan-400 rounded-full' onClick={()=>(navigate('/login'))}>Login</button>
    </div>
  )
}

export default Logout
