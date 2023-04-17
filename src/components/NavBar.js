import React, { useState } from 'react'
import logo from '../images/logo.png'
import { FaPlusCircle } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  const [open, setOpen] = useState(false);


  return (
    <header className='border-b border-gray-300 py-4'>
      <div className='flex items-center justify-between xl:max-w-8xl xl:mx-auto lg:max-w-full px-[8%] '>
        <NavLink to="/home"><img className='w-1/6' src={logo} alt="" ></img></NavLink>
        <FiMenu className='lg:hidden  block h-6 w-6 cursor-pointer' onClick={() => setOpen(!open)} />

        {/*Nav Links  */}
        <nav className={`${open ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full `}>
          <ul className='font-semibold lg:flex block justify-between  text-1.5xl'>
            <li className='border-b border-gray-300  lg:border-none py-1'>
              <NavLink className='lg:px-4 lg:py-2   hover:text-red-700' to="google.com" >Learn</NavLink>
            </li>
            <li className='border-b border-gray-300 lg:border-none py-1'>
              <NavLink className='lg:px-4 lg:py-2   hover:text-red-700' to="/request" >Request Blood</NavLink>
            </li>
            <li className='border-b border-gray-300 lg:border-none py-1'>
              <NavLink className='lg:px-4 lg:py-2   hover:text-red-700' to="google.com" >About Us</NavLink>
            </li>
            <li className='border-b border-gray-300 lg:border-none py-1'>
              <NavLink className='lg:px-4 lg:py-2   hover:text-red-700' to="google.com" >Support Us</NavLink>
            </li>
            <li className='border-b border-gray-300 lg:border-none py-1'>

              <NavLink className='lg:px-4 lg:py-2   hover:text-red-700' to="google.com" >Events</NavLink>
            </li>
            <li className='border-b border-gray-300 lg:border-none py-1'>
              <NavLink className='lg:px-4 lg:py-2   hover:text-red-700' to="google.com" >Non-Discrmination Notice</NavLink>
            </li>
            <li>
              <NavLink to="/donate" className='inline-flex bg-red-700 text-white px-4 py-2 mt-0 rounded w-full hover:w-[+120%] transition delay-150 hover:delay-150 hover:duration-300'><i className='mx-2 my-1'><FaPlusCircle /></i>DONATE</NavLink>
            </li>
          </ul>
        </nav>


      </div>
    </header>
  )
}

export default NavBar
