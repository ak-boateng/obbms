import SignUpForm from "../components/SignUpForm"

const Donate = () => {
  return (
    <div className='bg-red-700'>
      <h1 className='lg:text-2xl text-xl font-bold text-center py-4 text-white'>DONOR REGISTRATION PAGE</h1>
      <p className='text-center py-5 font-md text-lg text-white'>Kindly take your time to fill out this form</p>
      
      <SignUpForm />
    </div>
  )
}

export default Donate
