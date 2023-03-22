import React from 'react'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
        // Three Grid Element Footer
    <div className='lg:grid absolute bottom-0 lg:grid-cols-3 container lg:mx-40 mx-10'>
      {/* First Grid Element */}
        <div className='p-5'>
        <NavLink to= "/home"><img className='w-1/6' src={logo} alt="" ></img></NavLink>
            <p className='font-medium lg:text-2xl'>Online Blood Bank Management Sytem</p>
        </div>
        <div className=''>
            <h2 className='text-red-700 font-bold text-xl '>Supported Links</h2>
            <ul className='block'>
            <NavLink to= "/home"> Overview</NavLink>
            <NavLink to= "/home"> First Time Donors</NavLink>
            <NavLink to= "/home"> Health Assesment</NavLink>
            <NavLink to= "/home"> COVID 19 Safety</NavLink>
            </ul>
        </div>
        <div className='block'>
            <h2 className='text-red-700 font-bold text-xl block'>Contact Us</h2>
            <span>00233 Drive</span>
            <span>Cape Coast, Ghana</span>
            <span>info@obbms.org</span>
        </div>
      
    </div>
  )
}

export default Footer
