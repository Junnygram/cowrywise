import React from "react";
import "./header.css";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleToggleNav = () => {
    setNavIsOpen(!navIsOpen);
  };
  return (
    <nav className="md:mx-5 my-2 relative md:static bg-blue-500 md:max-h-max md:bg-transparent md:flex justify-between items-center">
      <div
        className={`relative md:h-100vh md:static bg-blue-500 md:max-h-max md:bg-transparent md:flex justify-between items-center  ${
          navIsOpen ? "max-h-80 " : "max-h-0"
        }`}
      >
        <div className="flex justify-between items-center bg-white">
          <img
            className="w-48 h-14"
            src={"/images/cowrywise.png"}
            alt="logo-cowrywise"
          />
          <div
            className={`toggle-menu z-50 w-10 flex md:hidden flex-col justify-center items-center gap-1 cursor-pointer  ${
              navIsOpen ? "open " : "close"
            }`}
            onClick={handleToggleNav}
          >
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>

        <ul
          className={`links  fixed top-0 left-0 right-0 bg-blue-500 pl-4 md:pl-0 md:bg-transparent  md:static md:flex justify-between items-center gap-8 text-blue-500 transition-all md:transition-none duration-1000  ${
            navIsOpen ? "open" : "close"
          }`}
        >
          <li className="pt-16 md:pt-0  mb-9 md:mb-0 text-xl md:text-[1rem] cursor-pointer font-bold md:font-normal text-white md:text-[#7287A7] flex md:justify-between items-center">
            <span>Personal</span>
            <span>
              <MdArrowDropDown />
            </span>
          </li>
          <li className="mb-9 md:mb-0 text-xl md:text-[1rem] cursor-pointer font-bold md:font-normal text-white md:text-[#7287A7] flex md:justify-between items-center">
            <span>Business</span>
            <span>
              <MdArrowDropDown />
            </span>
          </li>
          <li className="mb-9 md:mb-0 text-xl md:text-[1rem] cursor-pointer font-bold md:font-normal text-white md:text-[#7287A7] flex md:justify-between items-center">
            <span>Developer</span>
            <span>
              <MdArrowDropDown />
            </span>
          </li>

          <ul>
            <li className="p-2  opacity-60 md:hidden pl-4 mt-7 border-r-gray-200 flex cursor-pointer text-gray-300 text-xl font-light">
              Sign Up
            </li>
            <li className="p-2 pl-4  opacity-60 md:hidden border-r-gray-200 flex cursor-pointer text-gray-300 text-xl font-light">
              Log In
            </li>
            <li className="p-2 pl-4  opacity-60 md:hidden border-r-gray-200 flex cursor-pointer text-gray-300 text-xl font-light">
              {" "}
              About
            </li>
            <li className="p-2 pl-4  opacity-60 md:hidden border-r-gray-200 flex cursor-pointer text-gray-300 text-xl font-light">
              FAQ's
            </li>
            <li className="p-2 pl-4  opacity-60 md:hidden border-r-gray-200 flex cursor-pointer text-gray-300 text-xl font-light">
              Security
            </li>
            <li className="p-2 pl-4  opacity-60 md:hidden border-r-gray-200 flex cursor-pointer text-gray-300 text-xl font-light ">
              Learn
            </li>
          </ul>
        </ul>
      </div>

      <div className="gap-8 hidden md:flex justify-between items-center">
        <button className="font-bold text-blue-500 block md:inline-block">
          Log In
        </button>
        <button className="bg-blue-600 font-bold drop-shadow-md hover:drop-shadow-lg text-white rounded-md px-4 py-2">
          Sign Up For Free
        </button>
      </div>
    </nav>
  );
};

export default Header;

// import React from "react";
// // import cowrywise from "../images/cowrywise.png";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { MdArrowDropDown } from "react-icons/md";
// import { useState } from "react";

// const Header = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };
//   return (
//     <div className=" flex justify-between bg-white text-sm items-center text-[#4b5563] px-4 py-4">
//       <div className="">
//         <img src={"/images/cowrywise.png"} alt="cowrywise" className="h-10" />
//       </div>
//       <div className="">
//         <ul className="hidden md:flex">
//           <li className="p-4 flex">
//             Personal
//             <MdArrowDropDown className="mt-1" />
//           </li>
//           <li className="p-4 flex">
//             Business
//             <MdArrowDropDown className="mt-1" />
//           </li>
//           <li className="p-4 flex">
//             Developer <MdArrowDropDown className="mt-1" />
//           </li>
//           <li className="p-4 flex">Learn</li>
//         </ul>
//       </div>
//       <div className="justify-between hidden md:flex">
//         <div className="p-4 text-blue-600">Log In</div>
//         <div className="">
//           <div className="p-4 bg-blue-600 text-white rounded-lg  h-10 pt-2.5 mt-1.5">
//             SignUp For Free
//           </div>
//         </div>
//       </div>

//       <div onClick={handleNav} className="block md:hidden  ">
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>

//       <ul
//         className={
//           nav
//             ? "fixed left-0 top-0 w-[90%] h-[100%]  border-white ease-in-out duration-500 px-5 bg-[#0066F5] text-white "
//             : "ease-in-out duration-500 fixed left-[-100%]"
//         }
//       >
//         <li className="p-4 mt-12 border-r-gray-200  flex text-3xl cursor-pointer hover:text-gray-300">
//           Personal
//           <MdArrowDropDown className="mt-1 " />
//         </li>
//         <li className="p-4  border-r-gray-200  flex text-3xl cursor-pointer hover:text-gray-300">
//           Business
//           <MdArrowDropDown className="mt-1 " />
//         </li>
//         <li className="p-4  border-r-gray-200 flex text-3xl cursor-pointer hover:text-gray-300">
//           Developer
//           <MdArrowDropDown className="mt-1" />
//         </li>

//         <li className="p-2 pl-4 mt-7 border-r-gray-200 flex cursor-pointer text-gray-300 text-xl font-light">
//           Sign Up
//         </li>
//         <li className="p-2 pl-4 border-r-gray-200 flex cursor-pointer text-gray-300 text-xl font-light">
//           Log In
//         </li>
//         <li className="p-2 pl-4 border-r-gray-200 flex cursor-pointer text-gray-300 text-xl font-light">
//           About
//         </li>
//         <li className="p-2 pl-4 border-r-gray-200 flex cursor-pointer text-gray-300 text-xl font-light">
//           FAQ's
//         </li>
//         <li className="p-2 pl-4 border-r-gray-200 flex cursor-pointer text-gray-300 text-xl font-light">
//           Security
//         </li>
//         <li className="p-2 pl-4  border-r-gray-200 flex cursor-pointer text-gray-300 text-xl font-light">
//           Learn
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Header;
