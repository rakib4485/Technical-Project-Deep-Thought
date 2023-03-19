import React, { useState } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

const LeftNav = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="absolute z-30 overflow-auto">
            <div className="fixed top-24 min-h-screen bg-gray-200 transition-all duration-500 ease-in-out">
                <div className={`w-[450px] flex justify-between bg-black p-3 transition-all duration-500 ease-in-out ${open ? "ml-0" : "-ml-[320px]"}`}>
                    <h4 className="text-xl font-semibold text-white">Journey Board</h4>
                    <span className="text-2xl text-white" onClick={() => setOpen(!open)}>
                        {
                            open ?
                                <BsFillArrowLeftCircleFill /> : <BsFillArrowRightCircleFill />
                        }
                    </span>
                </div>

                {
                    open &&
                        (
                            <div className="ml-10 transition-all duration-500 ease-in-out">
                                <p className="text-xl font-semibold">Explore the world of management</p>
                                <ul className="list-disc ml-16 mt-3">

                                    <li>Technical Project Management</li>
                                    <li>Threadbuild</li>
                                    <li>Structure you pointers </li>
                                    <li>4SA Method</li>
                                </ul>
                            </div> 

            )

        }

        {
            !open && 
            <div className="mt-16 text-right">
            <span className="text-white bg-[#0029ff] px-6 py-4 rounded mt-16 mr-10 font-semibold">1</span>
            </div>
        }
            </div>
        </div>
    );
};

export default LeftNav;