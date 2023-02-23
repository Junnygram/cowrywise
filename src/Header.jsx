import React from "react";
import cowrywise from "../src/images/cowrywise.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" flex justify-between bg-white text-sm items-center text-[#4b5563] px-4 py-4">
      <div className="">
        <img src={cowrywise} alt="cowrywise" className="h-10" />
      </div>
      <div className="">
        <ul className="hidden md:flex">
          <li className="p-4 flex">
            Business
            <MdArrowDropDown className="mt-1" />
          </li>
          <li className="p-4 flex">
            Developer <MdArrowDropDown className="mt-1" />
          </li>
          <li className="p-4 flex">Learn</li>
        </ul>
      </div>
      <div className="justify-between hidden md:flex">
        <div className="p-4 text-blue-600">Log In</div>
        <div className="p-4 bg-blue-600 text-white rounded-lg ">
          SignUp For Free
        </div>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-[39%]  border-white bg-white ease-in-out duration-500 "
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 py-4">
          <img src={cowrywise} alt="cowrywise" className="h-10" />
        </h1>
        <li className="p-4 border-b border-r-gray-200  flex">
          Business
          <MdArrowDropDown className="mt-1 " />
        </li>
        <li className="p-4 border-b border-r-gray-200 flex">
          Developer
          <MdArrowDropDown className="mt-1" />
        </li>
        <li className="p-4 border-b border-r-gray-200 flex">
          Log In
          <MdArrowDropDown className="mt-1" />
        </li>
        <li className="p-4 border-b border-r-gray-200 flex">
          SignUp For Free
          <MdArrowDropDown className="mt-1" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
