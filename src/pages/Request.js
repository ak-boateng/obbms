import React from 'react'
import RequestForm from '../components/RequestForm'


const Request = () => {
  return (
    <div>
      <h1 className='lg:text-2xl text-lg font-medium text-center mt-10'>BLOOD REQUEST FORM</h1>
      <p className='text-center p-4'>Do you want to request for blood for you or a loved one? Fill this form below</p>

      <RequestForm />
    </div>
  )
}

export default Request
