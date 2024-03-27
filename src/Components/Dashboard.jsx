import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard()
 {
let navigate = useNavigate()
let data = {
    'name':'John'
}
  return (
    <div>
      <h1>Dashboard Page</h1>
      <button className='mt-4 px-4 py-3 bg-cyan-400 rounded-full' onClick={()=>(navigate('/logout', {state:data}))}>Logout</button>
    </div>
  )
}

export default Dashboard
