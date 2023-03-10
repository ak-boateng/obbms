import React from 'react'
import logo from '../images/logo.png'
import { FaPlusCircle } from 'react-icons/fa';
import { FaHamburger } from 'react-icons/fa';


const NavBar = () => {
  return (
      <div className='p-8 flex container mx-40 justify-between'>
      <img className='w-1/6' src={logo} alt="" />
      <ul className=' font-semibold pt-2 text-1.5xl flex gap-4'>
       <a href="google.com">Learn</a>
       <a href="google.com">Donate</a>
       <a href="google.com">Eligibilty</a>
       <a href="google.com">Resources</a>
       <a href="google.com">Get Involved</a>
       <a href="google.com">Support Us</a>
       <a href='google.com'className='inline-flex bg-red-700 text-white pt-1 pr-2 mt-0 rounded'><i className='mx-2 my-1'><FaPlusCircle /></i>DONATE</a>
      </ul>

      <a href='google.com' className='bg-white p-3 hidden sm:block justify-end'><i><FaHamburger/> </i></a>
      </div>
  )
}

export default NavBar
