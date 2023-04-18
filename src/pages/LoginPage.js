import React from 'react'
import Login from '../components/Login'

function LoginPage() {
    return (
        <div className='bg-red-700 pb-10'>
            <h3 className='text-white text-center font-bold lg:text-2xl text-lg py-6'>LOGIN TO YOUR DONOR ACCOUNT </h3>
            <Login />
        </div>
    )
}

export default LoginPage
