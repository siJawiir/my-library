import React from "react";
import {
  FaArrowCircleDown,
  FaArrowDown,
  FaEdit,
  FaSort,
  FaSortAlphaDown,
  FaSortDown,
  FaTrash,
} from "react-icons/fa";
import Dropdown from "../../utils/Dropdown";
import SortButton from "../../utils/SortButton";

function TableAuthor() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <h1 className="text-lg font-bold text-left text-primary1 bg-white ">
          All <snap className="text-primary2">Authors</snap>
        </h1>
      </div>
      <table className="w-full whitespace-nowrap">
        <thead>
          <tr className="h-16 w-full text-sm leading-none text-gray-800">
            <th className="font-normal text-left pl-4 w-60">Author Name</th>
            <th className="font-normal text-left pl-12 w-48">Author Address</th>
            <th className="font-normal text-left pl-12 w-48">Actions</th>
          </tr>
        </thead>
        <tbody className="w-full">
        <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
            <td className="pl-4 cursor-pointer">
                <p className="font-semibold">Leila S. Chudori</p>
            </td>
            <td className="pl-12">
              <p className="truncate ... w-60">Indonesia</p>
            </td>
            <td className="px-7 2xl:px-0 flex flex-row items-center justify-center">
              <div className="flex flex-row">
                <div className="text-xs w-18 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
                  <FaEdit className="mr-2" />
                  <p>Edit</p>
                </div>
                <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
                  <FaTrash className="mr-2" />
                  <p>Delete</p>
                </div>
              </div>
            </td>
          </tr>
          <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
            <td className="pl-4 cursor-pointer">
                <p className="font-semibold">Ono Eriko</p>
            </td>
            <td className="pl-12">
              <p className="truncate ... w-60">Jepang</p>
            </td>
            <td className="px-7 2xl:px-0 flex flex-row items-center justify-center">
              <div className="flex flex-row">
                <div className="text-xs w-18 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
                  <FaEdit className="mr-2" />
                  <p>Edit</p>
                </div>
                <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
                  <FaTrash className="mr-2" />
                  <p>Delete</p>
                </div>
              </div>
            </td>
          </tr>
          <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
            <td className="pl-4 cursor-pointer">
                <p className="font-semibold">Almira Bastari</p>
            </td>
            <td className="pl-12">
              <p className="truncate ... w-60">Indonesia</p>
            </td>
            <td className="px-7 2xl:px-0 flex flex-row items-center justify-center">
              <div className="flex flex-row">
                <div className="text-xs w-18 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
                  <FaEdit className="mr-2" />
                  <p>Edit</p>
                </div>
                <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
                  <FaTrash className="mr-2" />
                  <p>Delete</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableAuthor;
