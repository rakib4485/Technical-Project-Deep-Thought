import React, { useState } from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  
  
  const handleClick = () => {
    
    if (activeIndex === 0) {
      setTimeout(()=> {setActiveIndex(null);}, 200);
      
    } else {
      setTimeout(()=> {setActiveIndex(0);}, 200);
    }
  };

  return (
    <div className=" mx-auto">
      {
        <div
          className="border-b border-gray-300 duration-500"
        >
          <button
            className="w-full flex  items-center justify-between px-4 py-2 text-lg font-medium text-center text-white bg-black focus:outline-none rounded-t-2xl"
            
          >
            <span className='text-center w-[100%]'>{items.title}</span>
            <AiOutlineInfoCircle onClick={() => handleClick()}  className="text-2xl duration-500"/>
          </button>
          {activeIndex === 0 && (
            <div className="p-4 text-gray-700 duration-500"><strong>Description: </strong>{items.content}</div>
          )}
        </div>
      }
    </div>
  );
};

export default Accordion;
