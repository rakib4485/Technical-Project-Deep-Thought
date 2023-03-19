import React, { useState } from 'react';
import Examples from './Examples';

const MethodAccordion = ({method}) => {

    const {title, content, examples} = method;

    const [activeIndex, setActiveIndex] = useState(0);
    const [sliceValue, setSliceValue] = useState(150);
    const [activeSlice, setActiveSlice] = useState(true);

      const index = 0;
  
      const handleClick = (index) => {
        
        if (activeIndex === index) {
          setTimeout(()=> {setActiveIndex(null);}, 200);
          
        } else {
          setTimeout(()=> {setActiveIndex(0);}, 200);
        }
      };

      const handleSlice = () =>{
        setActiveSlice(!activeSlice);
        if(activeSlice === true){
            setSliceValue(10000);
        }
        else{
            setSliceValue(150);
        }
      }

    return (
        <div className=" mx-auto mb-10">
    {
      <div
        className=" border-gray-300 duration-500"
      >
        <button
          className="w-full flex  items-center px-4 py-2 text-lg font-medium text-center text-gray-700 bg-gray-100 hover:bg-gray-200e outline-none"
          
        ><svg
        className={`w-6 h-6 ${activeIndex === index ? 'transform rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => handleClick(index)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
          <span className=' text-black ml-4 text-2xl font-semibold'>{title}</span>
        </button>
        {activeIndex === index && (
          <div className="p-4 text-gray-700 duration-500">
            <p className="text-justify">{content.slice(0,sliceValue)}</p>
            <p className="text-right my-4 cursor-pointer font-semibold hover:text-blue-800 hover:underline" onClick={() => handleSlice()}>{activeSlice === true ? "See More..." : "See Less..."}</p>
          </div>
        )}
        {activeIndex === index && 
            examples.length >= 1 && 
            examples.map(example => (
                <Examples
                key={example.id}
                example={example}
                />
            ))
        }
      </div>
    }
  </div>
    );
};

export default MethodAccordion;