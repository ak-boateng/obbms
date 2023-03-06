import React from 'react'
import { FaLock } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='bg-black  text-white'>
      <div className='p-5 flex container mx-40 justify-between'>
      <p>Quick Call : 030 456 1111</p>
      <ul className=' font-semibold text-1xl flex gap-6'>
        <a href='#'className='inline-flex'><i className='mx-2 my-1'><FaLock /></i>Admin Login</a>
        <a href='#'className='inline-flex'><i className='mx-2 my-1'><FaLock /></i>Donor Login</a>
        
      </ul>
      </div>
    </div>
  )
}

export default Header
