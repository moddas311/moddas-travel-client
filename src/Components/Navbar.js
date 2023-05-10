import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import PrimaryButton from "../Components/Button/PrimaryButton";
import { ArrowRightOnRectangleIcon, UserIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="text-gray-900 body-font shadow-sm">
      <div className=" mx-auto flex flex-wrap py-5 px-20 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-4 md:mb-0"
        >
          <span className="ml-3 text-2xl font-bold ">Moddas Travel</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {user?.email ? (
            <>
              <div className="relative inline-block ">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40  focus:ring-blue-300  focus:ring  focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl ">
                    <Link
                      to="/dashboard"
                      className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 "
                    >
                      <UserIcon className="w-5 h-5" />
                      <span className="mx-1">Dashboard</span>
                    </Link>

                    <hr className="border-gray-200" />
                    <div
                      onClick={() => {
                        setIsDropdownOpen(false);
                        logout();
                      }}
                      className="flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 "
                    >
                      <ArrowRightOnRectangleIcon className="w-5 h-5" />
                      <span className="mx-1">Sign Out</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="mr-5 hover:text-cyan-500">
                Login
              </Link>
              <Link to="/signup" className="mr-5">
                <PrimaryButton classes="rounded-md px-2 py-1">
                  Signup
                </PrimaryButton>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
