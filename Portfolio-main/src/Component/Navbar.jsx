import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import "./Global.css"
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="bg-black border-b border-[#B75CFF] min-h-[10vh] flex items-center">
        <nav className="w-full sm:px-10 xl:px-36 mx-auto relative ">
          <div className="flex justify-between items-center">
            <div className=" ">
              <a className="block w-[130px]" href=""><img src="https://i.ibb.co/XbFX8t6/download.jpg" alt="mylogo" className="bg-black w-[130px] md:w-[130px] h-[80px] md:h-[80px]" /></a>
            </div>
            <div className="Right-Navbar">
              <ul className="flex gap-5 max-[400px]:-translate-x-10 justify-between 
            items-center 
            text-xl ff-poppins
          text-white
            text-nowrap
            duration-[0.5s]
            cursor-pointer"
              >
                <li>
                  <NavLink to="/" className="hover:text-[#B75CFF]">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/Skills" className="hover:text-[#B75CFF]">Skills</NavLink>
                </li>
                <li>
                  <NavLink to="/About" className="hover:text-[#B75CFF]">About Me</NavLink>
                </li>

                <li>
                  <NavLink to="/Project" className="hover:text-[#B75CFF]">Projects</NavLink>
                </li>

                <li>
                  <NavLink to="/Contact" className="hover:text-[#B75CFF]">Contact</NavLink>
                </li>
                <CiMenuFries className="text-4xl Menu-icon" onClick={() => setMenu(!menu)} />
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className={`h-screen w-full  p-3 flex items-center justify-center
           ${menu === false ? "hidden" : "block"}  
            absolute 
            top-0
            right-0`} style={{ background: "rgba(10, 61, 98,1.0)" }}>
        <ul className="flex justify-center
            flex-col
            items-center pt-2 
            text-xl font-serif
          text-white
            text-nowrap
            cursor-pointer
            gap-3
            "
        >
          <li>
            <NavLink to="/" className="hover:text-[#B75CFF]" onClick={() => setMenu(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Skills" className="hover:text-[#B75CFF]" onClick={() => setMenu(false)}>Skills</NavLink>
          </li>
          <li>
            <NavLink to="/About" className="hover:text-[#B75CFF]" onClick={() => setMenu(false)}>About Me</NavLink>
          </li>

          <li>
            <NavLink to="/Project" className="hover:text-[#B75CFF]" onClick={() => setMenu(false)}>Projects</NavLink>
          </li>

          <li>
            <NavLink to="/Contact" className="hover:text-[#B75CFF]">Contact</NavLink>
          </li>

          <MdCancel className="text-4xl absolute top-2 right-2 hover:text-[#B75CFF]" onClick={() => setMenu(false)} />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
