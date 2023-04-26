import React from 'react'

const Login = () => {
  return (
    <div className='lg:mx-80 mx-20  mt-7 bg-white px-20 pt-10 h-auto'>
      <form>
        {/* Email of Donor  */}
        <label className="block mb-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Email
                    </span>
                    <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-red-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@gmail.com" />
        </label>
        {/* Password of Donor  */}
        <label className="block mb-10">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Password
                    </span>
                    <input type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-red-500 block w-full rounded-md sm:text-sm focus:ring-1"  />
        </label>
        {/* Remember me */}
        <div className='flex mb-10'>
          <input type="checkbox" className='mr-2' />
          <p className='text-sm'>Remember me</p>
        </div>

        {/* Login Button */}

        <div>
          <button className='bg-red-700 hover:bg-red-600 text-white text-lg font-semibold  w-full rounded-sm px-10 py-3'>LOG IN</button>
        </div>

        {/* Forgot Password */}
        <div className='mb-5 py-8 text-center'>
          <a href='/forgotpswd' className='text-sm text-red-600 underline self-center'>Forgot Password?</a>
        </div>

      </form>

      
    </div>
  )
}

export default Login
