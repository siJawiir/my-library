import React from "react";
import {
  FaArrowCircleDown,
  FaArrowDown,
  FaSort,
  FaSortAlphaDown,
  FaSortDown,
} from "react-icons/fa";
import Dropdown from "../../utils/Dropdown";
import SortButton from "../../utils/SortButton";

function TableUser() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <h1 className="text-lg font-bold text-left text-primary1 bg-white ">
          All <snap className="text-primary2">Users</snap>
        </h1>
        <div className="flex flex-row right-24 absolute">
          <SortButton />
        </div>
      </div>
      <table className="w-full whitespace-nowrap">
        <thead>
          <tr className="h-16 w-full text-sm leading-none text-gray-800">
            <th className="font-normal text-left pl-4 w-60">Full Name</th>
            <th className="font-normal text-left pl-12 w-48">Username</th>
            <th className="font-normal text-left pl-12 w-48">Email</th>
            <th className="font-normal text-left pl-12 w-28">Phone</th>
            <th className="font-normal text-left pl-12 w-60">Address</th>
          </tr>
        </thead>
        <tbody className="w-full">
          <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
            <td className="pl-4 cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10">
                  <img
                    className="w-full h-full"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects.png"
                    alt="avatar"
                  />
                </div>
                <div className="pl-4">
                  <p>Raihan Marwanda</p>
                </div>
              </div>
            </td>
            <td className="pl-12">
              <p className="text-sm font-medium leading-none text-gray-800">
                @raihanmarwanda
              </p>
            </td>
            <td className="pl-12">
              <p>raihan@admin.com</p>
            </td>
            <td className="pl-12">
              <p>+62 81123234567</p>
            </td>
            <td className="pl-12">
              <p className="truncate ... w-60">Indonesia</p>
            </td>
            <td className="px-7 2xl:px-0">
              <Dropdown />
            </td>
          </tr>
          <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
            <td className="pl-4 cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10">
                  <img
                    className="w-full h-full"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects.png"
                    alt="avatar"
                  />
                </div>
                <div className="pl-4">
                  <p>Raihan Marwanda</p>
                </div>
              </div>
            </td>
            <td className="pl-12">
              <p className="text-sm font-medium leading-none text-gray-800">
                @raihanmarwanda
              </p>
            </td>
            <td className="pl-12">
              <p>raihan@admin.com</p>
            </td>
            <td className="pl-12">
              <p>+62 81123234567</p>
            </td>
            <td className="pl-12">
              <p className="truncate ... w-60">Indonesia</p>
            </td>
            <td className="px-7 2xl:px-0">
              <Dropdown />
            </td>
          </tr>
          <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
            <td className="pl-4 cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10">
                  <img
                    className="w-full h-full"
                    src="https://cdn.tuk.dev/assets/templates/olympus/projects.png"
                    alt="avatar"
                  />
                </div>
                <div className="pl-4">
                  <p>Raihan Marwanda</p>
                </div>
              </div>
            </td>
            <td className="pl-12">
              <p className="text-sm font-medium leading-none text-gray-800">
                @raihanmarwanda
              </p>
            </td>
            <td className="pl-12">
              <p>raihan@admin.com</p>
            </td>
            <td className="pl-12">
              <p>+62 81123234567</p>
            </td>
            <td className="pl-12">
              <p className="truncate ... w-60">
                Indonesiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </td>
            <td className="px-7 2xl:px-0">
              <Dropdown />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableUser;
