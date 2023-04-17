import React from 'react'

const RequestForm = () => {
  return (
     <div className='container mx-40'>
            <form>
                <p className='lg:text-lg text-left text-red-700 font-semibold mb-5'>Personal Information</p>
               {/* Full Name of Donor  */}
               <label className="block mb-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Full Name
                    </span>
                    <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block lg:w-full w-1/2 rounded-md sm:text-sm focus:ring-1" placeholder="Enter You Full Name" />
                </label>
                
                {/* Phone Number */}
                <label className="block mb-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Phone Number
                    </span>
                    <input type="tel" name="phoneNumber" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"  />
                </label>
                
                <p className='lg:text-lg text-left text-red-700 font-semibold mb-20'>Blood Information</p>
                {/*Select Blood Type from a drop down list */}
                <div className="grid-3">
                    <div className='mb-10'>
                        <label className="block">Choose Blood Type</label>
                        <select className='w-1/2'>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>O+</option>
                            <option>O-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                        </select>
                        
                    </div>
                </div>
                <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Submit</button>
            </form>
        </div>



    )

}

export default RequestForm
