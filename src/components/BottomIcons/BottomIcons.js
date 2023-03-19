import React from 'react';
import {  BsQuestionLg } from 'react-icons/bs';
import { FaPeopleCarry, FaRegCalendarAlt } from 'react-icons/fa';

const BottomIcons = () => {
    return (
        <div className='fixed bottom-2 right-2'>
            <div className='flex flex-col gap-2'>
            <BsQuestionLg className='text-6xl p-3 rounded-full bg-[#0029ff] text-white'/>
            <FaPeopleCarry className='text-6xl p-3 rounded-full bg-[#0029ff] text-white'/>
            <FaRegCalendarAlt className='text-6xl p-3 rounded-full bg-[#0029ff] text-white'/>
        </div>
        </div>
    );
};

export default BottomIcons;