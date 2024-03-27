import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <ul className='flex justify-center gap-10 items-center py-6 bg-[#344dbd]'>
        <li><NavLink to="/" style={({isActive})=>{return {backgroundColor: isActive ? 'red' : ''}}}>Home</NavLink></li>
        {/* <li><NavLink to="/About" className={` ${isActive ? 'bg-red-500' : ''} `}>About</NavLink></li> */}
        <li ><NavLink to='/about' className={({isActive})=>((isActive ? 'bg-[red]' : ''))}>About</NavLink></li>
        <li><NavLink to='/contact' className={({isActive})=>((isActive ? 'bg-[red] ' : ''))}>Contact</NavLink></li>
        <li><NavLink to='/product' className={({isActive})=>((isActive ? 'bg-[red] ' : ''))}>Product</NavLink></li>
        <li><NavLink to='/post/phone/1' className={({isActive})=>((isActive ? 'bg-[red] ' : ''))}>Post</NavLink></li>
      </ul>
    </>
  )
}

export default Navbar
