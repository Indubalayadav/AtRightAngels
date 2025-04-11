import React from 'react'
import { useNavigate } from 'react-router-dom';


const CustomButton = ({name, submit=false, path}) => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(path);
    
  }
  const bgColor = submit ? 'bg-gray-800 hover:bg-gray-900' : 'bg-(--Blumine)';
  return (
    <button className={`${bgColor} text-sm font-medium text-(--primary-color) px-6 py-3 rounded flex items-center gap-2 transition tracking-[1px] h-12 cursor-pointer`}
      onClick={onSubmit}>
         {name}
        <span className="text-xl font-normal"><i className="fas fa-arrow-right"></i></span>
      </button>
  )
}

export default CustomButton