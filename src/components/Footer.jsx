import React from "react";
import "tailwindcss/tailwind.css";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import myImage from "../Assets/qrcode.png";

const Footer = () => {
  return (
    <div className="m-5 rounded-full">
      <div className="bg-zinc-900 text-white p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="mb-6">
            <h2 className="text-lg mb-4 text-amber-500">OUR CONTACT</h2>
            <p>Rohtas, Dehri-On-Sone.</p>
            <p>06184-256200</p>
            <p>sp-rohtas-bih@nic.in</p>

            <div className="flex space-x-4 mt-4">
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="http://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="http://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg mb-4 text-amber-500">Quick Links</h2>
            <ul>
              <li>News and Events</li>
              <li>Press Release</li>
              <li>Missing Person</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-lg mb-4 text-amber-500">Important Links</h2>
            <ul>
              <li>Online Complaint</li>
              <li>Apply Character</li>
              <li>Passport</li>
              <li>Feedback / Suggestion</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex">
              <img
                src={myImage}
                alt="QRCode"
                className="max-w-xs w-40 h-40 items-end ml-10"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-wrap md:flex-nowrap items-center border-t border-gray-400 pt-4 mt-6">
          <div className="flex justify-between items-center   border-gray-400 pt-4 mt-6 rounded-full">
            <div className="flex items-center">
              <p className="bg-gray-500 px-2 py-1 rounded-l-full">
                Total Mobile Application Installed:
              </p>
              <span className="bg-gray-900 px-4 py-2 rounded-r-full">
                89120
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center   border-gray-400 pt-4 mt-6 rounded-full">
            <div className="flex items-center">
              <p className="bg-gray-500 px-2 py-1 rounded-l-full">
                Total No. of Visitors:
              </p>
              <span className="bg-gray-900 px-4 py-2 rounded-r-full">
                89120
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between    pt-4 mt-6">
          <span className=" text-sm">
            Copyright©2024 Design & Developed by Threepalette creatives &
            Technocode ninja.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
