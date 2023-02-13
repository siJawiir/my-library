import React from "react";
import { FaBook, FaPen, FaUserPlus, FaUsers } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

function BookMenu(props) {
  return (
    <div>
      <div className="flex items-center w-full justify-center">
        <h2 className="text-lg font-semibold text-left text-primary1 bg-white flex flex-row mr-14">
          Menu<span className="text-primary2">s</span>
        </h2>
        <div className="flex">
          <a
            className={`flex items-center py-2 px-2 mx-2 border-2 border-gray-50 rounded shadow-md w-48 ${props.Books}`}
            href="/books"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
              <FaBook className="w-6 h-6 text-purple-600" />
            </div>
            <div className="pl-4">
              <p className="w-8 text-sm leading-3 text-gray-500 ">Books</p>
            </div>
          </a>
          <a
            className={`flex items-center py-2 px-2 mx-2 border-2 border-gray-50 rounded shadow-md w-48 ${props.Categories}`}
            href="/categories"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
              <MdCategory className="w-6 h-6 text-blue-600" />
            </div>
            <div className="pl-4">
              <p className="w-8 text-sm leading-3 text-gray-500 ">Categories</p>
            </div>
          </a>
          <a
            className={`flex items-center py-2 px-2 mx-2 border-2 border-gray-50 rounded shadow-md w-48 ${props.Authors}`}
            href="/authors"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full">
              <FaPen className="w-6 h-6 text-orange-600" />
            </div>
            <div className="pl-4">
              <p className="w-8 text-sm leading-3 text-gray-500 ">Authors</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookMenu;
