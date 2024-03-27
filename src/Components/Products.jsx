import React from 'react'
import {Link, Outlet } from 'react-router-dom'

function Products() {

  return (
    <div className='p-2'>
     <h1 className='text-2xl '>Product Page</h1>
      <nav className='list-none font-bold'>
       <li >
       <Link to="shirt">Shirts</Link>
       </li> 
       <li>
        <Link to="jean">Jeans</Link>
       </li>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Products
