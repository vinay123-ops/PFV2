import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-lg">Designed by VINAY KUMAR</h3>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-center">
          <h3 className="text-lg">Copyright © {year} VK</h3>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-right">
          <ul className="flex justify-center md:justify-end space-x-4">
            <li>
              <a
                href="https://github.com/vinay123-ops"
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/vinay-kumar-65b490185/"
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/its_vin600/?next=%2F"
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;