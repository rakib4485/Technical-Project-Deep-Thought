import React, { useState } from 'react';

const Examples = ({example}) => {
    
    const [sliceValue, setSliceValue] = useState(150);
    const [activeSlice, setActiveSlice] = useState(true);

    const handleSlice = (id) =>{
        setActiveSlice(!activeSlice);
        if(activeSlice === true){
            setSliceValue(100000);
        }
        else{
            setSliceValue(150);
        }
      }

    return (
        <div className="ml-5 mr-2 my-5">
                    <h3 className="text-xl font-semibold bg-gray-200 border py-2 pl-5">{example.exTitle}</h3>
                    <p className='mx-2 text-justify'>{(example.exContent).slice(0,sliceValue)}</p>
                    <p className="text-right my-4 cursor-pointer font-semibold hover:text-blue-800 hover:underline" onClick={() => handleSlice(example.id)}>{activeSlice === true ? "See More..." : "See Less..."}</p>
                </div>
    );
};

export default Examples;