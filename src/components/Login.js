import React from 'react'
import LoginCardImage from '../images/logincardimg.jpg'

const Login = () => {
  return (
    <div className='lg:mx-40 mx-20  sm:grid block sm:grid-cols-2 mt-7 bg-white p-20'>
      <form>
        {/* Email of Donor  */}
        <label className="block mb-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Email
                    </span>
                    <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-red-500 block lg:w-2/3 rounded-md sm:text-sm focus:ring-1" placeholder="you@gmail.com" />
        </label>
        {/* Password of Donor  */}
        <label className="block mb-10">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Password
                    </span>
                    <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-red-500 block lg:w-2/3 rounded-md sm:text-sm focus:ring-1"  />
        </label>
        {/* Remember me */}
        <div className='flex mb-10'>
          <input type="checkbox" className='mr-2' />
          <p className='text-sm'>Remember me</p>
        </div>

        {/* Login Button */}

        <div>
          <button className='bg-red-700 text-white font-semibold lg:w-2/3 w-full rounded-sm px-10 py-3'>LOG IN</button>
        </div>

        {/* Forgot Password */}
        <div className='mt-10'>
          <p className='text-sm'>Forgot Password?</p>
        </div>

      </form>

      <div>
        <img alt='blood samples' src={LoginCardImage} className='w-3/4 rounded-md hidden lg:block h-[50%]'/>
      </div>
    </div>
  )
}

export default Login
