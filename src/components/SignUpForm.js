import React from 'react'
import { FaDownload } from 'react-icons/fa'



const PDF_FILE_URL = 'http://localhost:3000/donationform.pdf';


const SignUpForm = () => {
    const downloadFileAtURL = (url) => {
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', 'donationform.pdf');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return (
        <div className=' mx-40 grid  grid-cols-2'>
            <form className=''>
                {/* Full Name of Donor  */}
                <label className="block mb-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Full Name
                    </span>
                    <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter You Full Name" />
                </label>
                {/* Email  */}
                <label className="block mb-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Email
                    </span>
                    <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1" placeholder="you@gmail.com" />
                </label>
                {/* Phone Number */}
                <label className="block mb-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Phone Number
                    </span>
                    <input type="tel" name="phoneNumber" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"  />
                </label>
                {/* PassWord */}
                <label className="block mb-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Password
                    </span>
                    <input type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1"  />
                </label>
                {/*Confirm PassWord */}
                <label className="block mb-5">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Confirm Password
                    </span>
                    <input type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 rounded-md sm:text-sm focus:ring-1" />
                </label>
            


                <h3 className='lg:text-lg text-left text-red-700 font-semibold mb-5'>Additional Information/ Questionaire</h3>
                <p className='lg:text-lg text-left font-medium italic mb-5'>Please Download this questionare and fill the needed information. Carry it along when coming to the donation center to donate blood </p>

                <div className='mb-10'>
                    <button className = 'text-white bg-red-500 hover:bg-red-800 focus:ring-4 lg:text-lg px-10 py-3 flex gap-2' onClick={() => {downloadFileAtURL(PDF_FILE_URL)}}> <FaDownload/>Click Here To Download Questionaire</button>
                </div>
                <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Submit</button>
            </form>
            <div>
                <p>Another space for pics</p>
            </div>
        </div>



    )
}

export default SignUpForm
