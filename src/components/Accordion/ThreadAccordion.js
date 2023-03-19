import React, { useState } from 'react';
import SubThread from './SubThread';

const ThreadAccordion = ({serialNo}) => {
    const [activeIndex, setActiveIndex] = useState(0);

        const [serial] = useState(serialNo.id);
        const alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    const thread = {
        title: `Thread ${alp[serial]}`,
    }
 

      const index = 0;
  
      const handleClick = (index) => {
        
        if (activeIndex === index) {
          setTimeout(()=> {setActiveIndex(null);}, 200);
          
        } else {
          setTimeout(()=> {setActiveIndex(0);}, 200);
        }
      };
    return (
        
    <div className="mx-auto mb-10">
    {
      <div
        className=" border-gray-300 duration-500"
      >
        <button
          className="w-full flex  items-center px-4 py-2 text-lg font-medium text-center text-gray-700 bg-gray-100 hover:bg-gray-200e outline-none rounded-t-2xl"
          
        ><svg
        className={`w-6 h-6 ${activeIndex === index ? 'transform rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => handleClick(index)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
          <span className=' text-black ml-4 text-2xl font-semibold'>{thread.title}</span>
        </button>
        {activeIndex === index && (
          <div className="p-4 text-gray-700 duration-500">
            <SubThread
                title={thread.title}
            />
          </div>
        )}
      </div>
    }
  </div>
    );
};

export default ThreadAccordion;