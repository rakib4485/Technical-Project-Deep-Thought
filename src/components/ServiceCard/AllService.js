import React from 'react';
import Method from './Method';
import ServiceCard from './ServiceCard';
import StructurePointer from './StructurePointer';
import Threadbuild from './Threadbuild';

const AllService = () => {
    return (
        <div className='w-[80%] mx-auto'>
            <div className="grid grid-cols-2 gap-10">
                <ServiceCard/>
                <Threadbuild/>
            </div>

            <div className="grid grid-cols-2 gap-10">
                <StructurePointer/>
                <Method/>
            </div>
        </div>
    );
};

export default AllService;