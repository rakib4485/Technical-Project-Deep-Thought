import React from 'react';

const Header = () => {
    return (
        <div className=' w-[80%] mx-auto'>
            <h1 className="text-3xl font-semibold text-[#0029ff]">Technical Project Management</h1>
            <button className="btn btn-sm bg-[#0029ff] hover:bg-[#0029ff] border-none fixed right-40 top-[100px]">Submit Task</button>
        </div>
    ); 
};

export default Header;