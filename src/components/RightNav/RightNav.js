import React, { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const RightNav = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="absolute z-30 overflow-auto">
            <div className="fixed right-0 top-24 min-h-[350px] rounded-l-2xl bg-gray-200 transition-all duration-500 ease-in-out">
                <div className={`w-[50px] flex flex-col h-[350px] rounded-l-2xl justify-between bg-black p-3 transition-all duration-500 ease-in-out ${open ? "mr-0" : "mr-[30px]"}`}>
                <span className="text-2xl text-white" onClick={() => setOpen(!open)}>
                        {
                            open ?
                                <AiOutlinePlus /> : <RxCross2 />
                        }
                    </span>
                    <h4 className="text-xl font-semibold text-white wri" style={{writingMode: "vertical-lr", textOrientation: "upright"}}>Notice Board</h4>
                    
                </div>

                
            </div>
        </div>
    );
};

export default RightNav;