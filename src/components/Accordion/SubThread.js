import React, { useState } from 'react';
import { BsLightbulb } from 'react-icons/bs';
import { HiOutlineX } from 'react-icons/hi';
import { HiPlusCircle } from 'react-icons/hi2';
import { BiMessageAltDetail } from "react-icons/bi";
import { RiQuestionnaireFill } from "react-icons/ri";
import { SiRootssage } from "react-icons/si";
import { FiLink2 } from "react-icons/fi";
import { TbPencilMinus } from "react-icons/tb";

const SubThread = ({ title }) => {
    const [inputs, setInputs] = useState([""]);
    const [subThread, setSubThread] = useState(1);

    const handleInputChange = (e, index) => {
        const newInputs = [...inputs];
        newInputs[index] = e.target.value;
        setInputs(newInputs);
        console.log(inputs)
    };

    const handleAddInput = () => {
        setInputs([...inputs, ""]);
        setSubThread(subThread + 1);
    };

    const handleRemoveInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
        setSubThread(subThread - 1);
    };
    return (
        <div>
            {inputs.map((input, index) => (
                <div className='grid grid-cols-2 gap-3 mb-16'>
                    <div key={index} className="flex w-full justify-center">
                        <div>
                        <div className='bg-gray-100 rounded-2xl w-full h-32'>
                            <p className="ml-3"><small>Sub Thread {index + 1}</small></p>
                            <textarea
                                type="textarea"
                                className="textarea shadow border rounded-2xl h-24 w-full px-3 text-gray-700  focus:outline-none focus:shadow-outline mt-2"

                                placeholder="Enter Text...."
                                onChange={(e) => handleInputChange(e, index)}
                            />

                            <div className="flex my-3 text-2xl gap-3 bg-white">
                                <BsLightbulb className="cursor-pointer hover:text-[#0029ff]" title="Eureka Movement" />
                                <BiMessageAltDetail className="cursor-pointer hover:text-[#0029ff]" title='Answer'></BiMessageAltDetail>
                                <RiQuestionnaireFill className="cursor-pointer hover:text-[#0029ff]" title='Question' ></RiQuestionnaireFill>
                                <SiRootssage className="cursor-pointer hover:text-[#0029ff]" title="Root Thought" />
                            </div>
                        </div>
                        </div>
                        <button button type="button" onClick={() => handleRemoveInput(index)}>
                            <HiOutlineX className='text-xl -ml-8 -mt-[60px]'></HiOutlineX>
                        </button>

                    </div>
                    <div className='h-24 bg-gray-100 rounded-2xl w-3/4'>
                        <p className="ml-3"><small>Sub Interpretation {index + 1}</small></p>
                        <textarea
                            type="textarea"
                            className="textarea shadow appearance-none border rounded-2xl h-full w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"

                            placeholder="Enter Text...."
                            onChange={(e) => handleInputChange(e, index)}
                        />

                        <div className="grid grid-cols-2 gap-3">
                            <select className=" rounded-xl pl-2 mt-2 w-full h-10 text-[11px] bg-white border shadow">
                                <option disabled selected><small>Select Categories</small></option>
                                <option><small>Remark</small></option>
                                <option><small>Sub-Argument</small></option>
                                <option><small>Sub-Explanation</small></option>
                                <option><small>Core Principle</small></option>
                            </select>
                            <select className=" rounded-xl pl-2 mt-2 w-full h-10 text-[11px] bg-white border shadow">
                                <option disabled selected><small>Select Process</small></option>
                                <option><small>Question</small></option>
                                <option><small>Analogy</small></option>
                                <option><small>Sarcasm</small></option>
                                <option><small>Insight</small></option>
                                <option><small>Counter-Example</small></option>
                            </select>
                        </div>
                    </div>


                </div>
            ))
            }
            <button className="btn btn-sm bg-[#0029ff] hover:bg-[#0029ff] border-none mt-" onClick={handleAddInput}><HiPlusCircle className="text-xl mr-1" /> <small>Sub Thread</small></button>
            <button></button>
            <div className='h-24 bg-gray-100 rounded-2xl mt-5'>
                <p className="ml-3"><small>Summary for Thread {title}</small></p>
                <textarea
                    type="textarea"
                    className="textarea shadow border rounded-2xl h-full w-full px-3 text-gray-700  focus:outline-none focus:shadow-outline mt-2"

                    placeholder="Enter Text...."
                />
                <div>

                </div>
            </div>
            <div className='mt-10 grid grid-cols-2'>
                <div className='flex gap-2 items-center'>
                    <FiLink2></FiLink2>
                    <span className='text-md'>Thread Credit</span>
                    <TbPencilMinus className="text-[#0029ff]"/>
                </div>
                <select className=" rounded-xl pl-2 mt-2 w-full h-10 text-[11px] bg-white border shadow">
                    <option disabled selected><small>Select Process</small></option>
                    <option><small>Question</small></option>
                    <option><small>Analogy</small></option>
                    <option><small>Sarcasm</small></option>
                    <option><small>Insight</small></option>
                    <option><small>Counter-Example</small></option>
                </select>
            </div>
        </div>
    );
};

export default SubThread;