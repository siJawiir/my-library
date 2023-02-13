import React from "react";
import { FaBook, FaPen, FaUserPlus, FaUsers } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

function Stat() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-left text-primary1 bg-white ">
        Statistic<span className="text-primary2">s</span>
      </h2>
      <div className="flex items-center w-full justify-center">
        <div className="flex">
          <a className="flex items-center py-2 px-2 mx-2 border-2 border-gray-50 rounded shadow-md w-48" href="/books">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full ">
              <FaBook className="w-6 h-6 text-purple-600" />
            </div>
            <div className="pl-4">
              <p className="w-11 text-lg font-semibold leading-none text-gray-800 ">
                230k
              </p>
              <p className="w-8 text-xs leading-3 text-gray-500 pt-2 ">Books</p>
            </div>
          </a>
          <a className="flex items-center py-2 px-2 mx-2 border-2 border-gray-50 rounded shadow-md w-48" href="/categories">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
              <MdCategory className="w-6 h-6 text-blue-600" />
            </div>
            <div className="pl-4">
              <p className="w-11 text-lg font-semibold leading-none text-gray-800 ">
                120
              </p>
              <p className="w-8 text-xs leading-3 text-gray-500 pt-2 ">
                Categories
              </p>
            </div>
          </a>
          <a className="flex items-center py-2 px-2 mx-2 border-2 border-gray-50 rounded shadow-md w-48" href="/authors">
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full">
              <FaPen className="w-6 h-6 text-orange-600" />
            </div>
            <div className="pl-4">
              <p className="w-11 text-lg font-semibold leading-none text-gray-800 ">
                8k
              </p>
              <p className="w-8 text-xs leading-3 text-gray-500 pt-2 ">
                Authors
              </p>
            </div>
          </a>
          <a className="flex items-center py-2 px-2 mx-2 border-2 border-gray-50 rounded shadow-md w-48" href="/users">
            <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
              <FaUsers className="w-6 h-6 text-red-600" />
            </div>
            <div className="pl-4">
              <p className="w-11 text-lg font-semibold leading-none text-gray-800 ">
                90k
              </p>
              <p className="w-8 text-xs leading-3 text-gray-500 pt-2 ">Users</p>
            </div>
          </a>
          <a className="flex items-center py-2 px-2 mx-2 border-2 border-gray-50 rounded shadow-md w-48 "href="/users">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
              <FaUserPlus className="w-6 h-6 text-green-600" />
            </div>
            <div className="pl-4">
              <p className="w-11 text-lg font-semibold leading-none text-gray-800 ">
                450
              </p>
              <p className="w-24 text-xs leading-3 text-gray-500 pt-2 ">
                New Users
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stat;
