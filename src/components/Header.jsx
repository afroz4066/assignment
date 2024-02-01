import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { FaArrowDown } from "react-icons/fa";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=" bg-white bg-opacity-40 p-4 border border-white rounded-md w-[90%] mx-auto my-auto mt-3 z-10 h-[10vh] hidden md:flex ">
        <div className="container mx-auto flex items-center justify-between ">
          {/* Logo */}
          <div className="h-[40px] w-[180px]">
            <img src={Logo} alt="" />
          </div>

          {/* Menu */}
          <nav className="space-x-10 font-semibold ">
            <a href="#" className="text-black ">
              Home
            </a>
            <a href="#" className="text-black ">
              About Us
              <i className="fa fa-angle-down text-black" />
            </a>

            <a href="#" className="text-black ">
              Citizen Services
              <i className="fa fa-angle-down text-black" />
            </a>
            <a href="#" className="text-black ">
              Helpline No
              <i className="fa fa-angle-down text-black" />
            </a>
            <a href="#" className="text-black ">
              Notification
              <i className="fa fa-angle-down text-black" />
            </a>
            <a href="#" className="text-black ">
              Download
              <i className="fa fa-angle-down text-black" />
            </a>
            <a href="#" className="text-black ">
              Media
              <i className="fa fa-angle-down text-black" />
            </a>
            <a href="#" className="text-black ">
              Contact Us
              <i className="fa fa-angle-down text-black" />
            </a>
          </nav>
        </div>
      </div>
      <div className="md:hidden bg-white bg-opacity-40 flex justify-between h-[10vh]">
        <div className="h-[40px] w-[180px]">
          <img src={Logo} alt="" />
        </div>
        <button
          onClick={toggleMenu}
          className="text-white p-2 focus:outline-none focus:bg-gray-700 "
        >
          <AiOutlineMenu size={30} />
        </button>

        {isOpen && (
          <div className="absolute top-0 left-0 w-full bg-gray-800 p-4">
            <button
              onClick={toggleMenu}
              className="text-white p-2 absolute top-0 right-0 focus:outline-none focus:bg-gray-700"
            >
              <ImCancelCircle size={30} />
            </button>

            <ul className="text-white">
              <li className="mb-2">
                <a href="">Home</a>
              </li>
              <li className="mb-2">
                <a href="">About Us</a>
              </li>
              <li className="mb-2">
                <a href="">Citizen Services</a>
              </li>
              <li className="mb-2">
                <a href="">Helpline No</a>
              </li>
              <li className="mb-2">
                <a href="">Notification</a>
              </li>
              <li className="mb-2">
                <a href="">Media</a>
              </li>
              <li className="mb-2">
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
