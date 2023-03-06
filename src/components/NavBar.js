import React from 'react'
import logo from '../images/logo.png'
import { FaPlusCircle } from 'react-icons/fa';


const NavBar = () => {
  return (
      <div className='p-8 flex container mx-40 justify-between'>
      <img className='w-1/6' src={logo} alt="" />
      <ul className=' font-semibold pt-2 text-1.5xl flex gap-4'>
       <a href="#">Learn</a>
       <a href="#">Donate</a>
       <a href="#">Eligibilty</a>
       <a href="#">Resources</a>
       <a href="#">Get Involved</a>
       <a href="#">Support Us</a>
       <a href='#'className='inline-flex bg-red-700 text-white pt-1 pr-2 mt-0 rounded'><i className='mx-2 my-1'><FaPlusCircle /></i>DONATE</a>
      </ul>
      </div>
  )
}

export default NavBar
