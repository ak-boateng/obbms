import React from 'react'
import { FaLock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-black  text-white'>
      <div className='lg:p-5 p-3 lg:flex flex container lg:mx-40  mx-20 justify-between'>
      <p>Quick Call : 030 456 1111</p>
      <ul className=' font-semibold lg:text-1xl text-sm flex lg:gap-6 gap-3'>
        <NavLink className='inline-flex' to='/login'><i className='lg:mx-2 px-1 my-1'><FaLock /></i>Admin Login</NavLink>
        <NavLink  className='inline-flex ' to = '/donorlogin'><i className='lg:mx-2 px-1 my-1'><FaLock /></i>Donor Login</NavLink>
        
      </ul>
      </div>
    </div>
  )
}

export default Header
