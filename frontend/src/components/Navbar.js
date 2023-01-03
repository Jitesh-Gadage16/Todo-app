import React from "react";
import CreatTask from "./CreatTask";
import ListTodo from "./ListTodo";
import { FaBars, FaSearch, FaUserCircle, FaRegBell, FaPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <div
        className="
      antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
    "
      >
        <header>
          <nav
            className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-red-500 dark:bg-slate-800
        "
          >
            <div className="flex justify-center items-center">
              <div className="mr-3">
                <FaBars />
              </div>
              <a href="#">
                logo
              </a>
            </div>

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              className="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg> */}

            <div className="hidden lg:flex ">
              <div className="relative">
                <FaSearch className="absolute text-gray-400 top-4 right-4" />
                <input type="text" placeholder="Search Todo" className="bg-stone-200 h-12 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer" name="" />
                <span className="absolute top-4 right-5 border-l pl-4"><i className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i></span>
              </div>
            </div>

            <div
              className=" w-full md:flex md:items-center md:w-auto"
              id="menu"
            >
              <ul
                className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
              >
               
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-Gray-400"
                    href="#"
                  >
                    <div className="flex justify-center items-center">

                      <FaPlus />
                      <div className="mr-2">Add Todo</div>
                    </div>

                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-Greay-100"
                    href="#"
                  >
                    <FaRegBell />
                  </a>
                </li>
                <li>
                  <a
                    className="md:p-4 py-2 block hover:text-Gray-100 text-Gray-400"
                    href="#"
                  >
                    <div className="flex justify-center items-center">
                      <div className="mr-2">Jitesh Gadage</div>
                      <FaUserCircle />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* <CreatTask />
        <ListTodo /> */}
      </div>
    </div>
  );
};

export default Navbar;
