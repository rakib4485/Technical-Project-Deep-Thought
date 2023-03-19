import React from 'react';
import { FaBinoculars, FaHome, FaTools } from 'react-icons/fa';
import { IoIosNotifications } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li className='h-12 bg-[#3683F0] rounded-full text-white ml-2'><a href='/'><FaHome></FaHome></a></li>
        <li className='h-12 bg-[#3683F0] rounded-full text-white ml-2'><a href='/'><FaBinoculars></FaBinoculars></a></li>
        <li className='h-12 bg-[#3683F0] rounded-full text-white ml-2'><a href='/'><FaTools></FaTools></a></li>
        
        <li className='h-12 bg-[#3683F0] rounded-full text-white ml-2'><a href='/'><IoIosNotifications></IoIosNotifications></a></li>
        <li className='h-12 w-12 bg-gray-500 rounded-full text-white ml-2'><span></span></li>
        <li className='h-12  text-black hover:bg-none'><a href='/'><BsThreeDotsVertical></BsThreeDotsVertical></a></li>
    </React.Fragment>
    return (
        <div className="navbar bg-[#f0f0f0] justify-between fixed top-0 shadow-md px-[5%]">
  <div className="navbar-start py-3">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="https://sdlms.deepthought.education/assets/uploads/files/system/site-logo.svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <a href='/' className=""><img className='md:h-[52px]' src="https://sdlms.deepthought.education/assets/uploads/files/system/site-logo.svg" alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal hover:bg-none">
      {menuItems}
    </ul>
  </div>
</div>
    );
};

export default Navbar;