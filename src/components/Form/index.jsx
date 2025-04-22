import React from 'react'
import CustomButton from '../CustomButton';

const Form = () => {
  return  (
    <div className=" min-h-screen flex justify-center items-center p-6">
      <form className=" p-6 rounded-lg  w-full max-w-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-(--MineShaft)">Name</label>
            <input
              type="text"
              placeholder="Placeholder"
              className="w-full mt-1 p-3 border border-(--Nevada) rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div>
            <label className="block text-(--MineShaft)">Email ID</label>
            <input
              type="email"
              placeholder="Placeholder"
              className="w-full mt-1 p-3 border border-(--Nevada) rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <p className="text-(--red) text-sm mt-1">Enter valid email id</p>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-(--MineShaft)">Description</label>
          <textarea
            placeholder="Placeholder"
            rows="4"
            className="w-full mt-1 p-3 border border-(--Nevada) rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          ></textarea>
        </div>


        <div className="mt-6">
            <CustomButton name="Submit" submit/>
        </div>
      </form>
    </div>
  );
};


export default Form