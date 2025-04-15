import React from 'react'
import CustomButton from '../CustomButton'


const Contact = () => {
  return (
    <div className="bg-(--AthensGray)">
    <div className="max-w-7xl mx-auto px-4 py-30 flex md:flex-row flex-col md:items-start justify-start  gap-16 md:gap-35">
      <div className="flex flex-col gap-6">
         <h2 className="text-(--black) font-semibold text-4xl tracking-widest">Get in Touch</h2>
         <p className="md:text-lg text-base">We’re here to help!  Reach out for any inquiries or support<br/> you need.</p>
           <p>Email: <span className="underline underline-offset-2">reach@apu.edu.in</span></p>
           <div className="flex flex-col gap-1">
            <h6 className="font-bold text-lg tracking-widest">Address</h6>
            <p className="text-base">Burugunte Village, Survey No 66, <br/> Bikkanahalli Main Rd, Sarjapura, Bengaluru, <br/> Karnataka 562125</p>
           </div>
      </div>
      
      <div className="">
      <form className="md:mt-14">
        <div className="flex md:flex-row flex-col gap-8">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Placeholder"
              className="w-full h-12 mt-1 p-3 bg-(--primary-color) border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email ID</label>
            <input
              type="email"
              placeholder="Placeholder"
              className="w-full h-12 mt-1 p-3 bg-(--primary-color) border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {/* <p className="text-red-500 text-sm mt-1">Enter valid email id</p> */}
          </div>
        </div>

        <div className="mt-8">
          <label className="block text-gray-700">Description</label>
          <input
            placeholder="Placeholder"
            className="w-full h-12 mt-1 p-3 bg-(--primary-color) border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          ></input>
        </div>


        <div className="mt-6">
            <CustomButton name="Submit" submit/>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Contact