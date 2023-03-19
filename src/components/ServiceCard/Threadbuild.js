import React, { useState } from 'react';
import Accordion from '../Accordion/Accordion';
import ThreadAccordion from '../Accordion/ThreadAccordion';

import { HiPlusCircle } from 'react-icons/hi2';

const Threadbuild = () => {
    const [inputs, setInputs] = useState([""]);
    const items = {
        title: 'Threadbuild',
        content: 'Watch the video and thread build, and jot out key threads while watching that video. ',
    }

    const serialNo = {
        id: inputs.length-1
    }

      console.log(serialNo)

    const handleAddInput = () => {
        setInputs([...inputs, ""]);
    };
    return (
        <div className='rounded-2xl h-[600px] border-2 my-12 shadow-md '>
            <Accordion 
                items={items}
            />
           <div className='h-[400px] overflow-auto'>
           {inputs.map((input, index) => (
                <ThreadAccordion 
                key={index}
                serialNo={serialNo}
                />
            ))
            
            }
            <div className='mt-5 text-right mr-10'>
            <button className="btn bg-[#0029ff] hover:bg-[#0029ff] border-none" onClick={handleAddInput}><HiPlusCircle className="text-xl mr-1" />New Thread</button>
            </div>
           </div>
        </div>
    );
};

export default Threadbuild;