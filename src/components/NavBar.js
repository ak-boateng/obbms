import React, { useState } from 'react'
import logo from '../images/logo.png'
import { FaPlusCircle } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';


const NavBar = () => {
  const [open, setOpen] = useState(false);


  return (
     <header className='border-b border-gray-300 py-4'>
       <div className='flex items-center justify-between xl:max-w-8xl xl:mx-auto lg:max-w-full px-[8%] flex-wrap'>
      <img className='w-1/6' src={logo} alt="" />
      <FiMenu className='lg:hidden block h-6 w-6 cursor-pointer'onClick= {() => setOpen(!open)}/>
      
      {/*Nav Links  */}
      <nav className={`${open ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full `}>
      <ul className='font-semibold lg:flex block justify-between  text-1.5xl'>
      <li className='border-b border-gray-300  lg:border-none py-1'>
        <a className='lg:px-4 lg:py-2   hover:text-red-700' href="google.com">Learn</a>
        </li>
        <li className='border-b border-gray-300 lg:border-none py-1'>
       <a className='lg:px-4 lg:py-2  hover:text-red-700' href="google.com">Donate</a>
        </li>
        <li className='border-b border-gray-300 lg:border-none py-1'>
       <a className='lg:px-4 lg:py-2  hover:text-red-700' href="google.com">Eligibilty</a>
        </li>
        <li className='border-b border-gray-300 lg:border-none py-1'>
       <a className='lg:px-4 lg:py-2 hover:text-red-700' href="google.com">Resources</a>
        </li>
        <li className='border-b border-gray-300 lg:border-none py-1'>
       
       <a className='lg:px-4 lg:py-2  hover:text-red-700' href="google.com">Get Involved</a>
        </li>
        <li className='border-b border-gray-300 lg:border-none py-1'>
        <a className='lg:px-4 lg:py-2  hover:text-red-700' href="google.com">Support Us</a>
        </li>
        <li>
        <a  href='google.com'className='inline-flex bg-red-700 text-white px-4 py-2 mt-0 rounded w-full hover:w-[+120%] transition delay-150 hover:delay-150 hover:duration-300'><i className='mx-2 my-1'><FaPlusCircle /></i>DONATE</a>
        </li>
      </ul>
      </nav>

      
      </div>
     </header>
  )
}

export default NavBar
