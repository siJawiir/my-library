import React from "react";
import { FaBalanceScale, FaCompass, FaEdit, FaGhost, FaHeart, FaMask, FaSearch, FaSmile, FaTrash, FaUser } from "react-icons/fa";
import { GiBlood, GiCompass, GiKitchenKnives, GiMagicPotion, GiPistolGun, GiStandingPotion } from "react-icons/gi";
import {RiKnifeBloodLine} from 'react-icons/ri'

function CategoryList() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-1/2">
        <div className="text-xs w-18 border-b border-gray-300 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1 shadow-md mb-2">
          <div className="text-xs w-32 p-2 cursor-pointer text-gray-700 flex flex-row rounded-full mx-1">
            <GiPistolGun className="mr-2" />
            <p className="font-semibold w-18">Actions</p>
          </div>
          <div className="text-xs w-18 ml-24 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaEdit className="mr-2" />
            <p>Edit</p>
          </div>
          <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaTrash className="mr-2" />
            <p>Delete</p>
          </div>
        </div>

        <div className="text-xs w-18 border-b border-gray-300 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1 shadow-md mb-2">
          <div className="text-xs w-32 p-2 cursor-pointer text-gray-700 flex flex-row rounded-full mx-1">
            <FaCompass className="mr-2" />
            <p className="font-semibold w-18">Adventures</p>
          </div>
          <div className="text-xs w-18 ml-24 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaEdit className="mr-2" />
            <p>Edit</p>
          </div>
          <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaTrash className="mr-2" />
            <p>Delete</p>
          </div>
        </div>

        <div className="text-xs w-18 border-b border-gray-300 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1 shadow-md mb-2">
          <div className="text-xs w-32 p-2 cursor-pointer text-gray-700 flex flex-row rounded-full mx-1">
            <FaUser className="mr-2" />
            <p className="font-semibold w-18">Autobiography</p>
          </div>
          <div className="text-xs w-18 ml-24 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaEdit className="mr-2" />
            <p>Edit</p>
          </div>
          <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaTrash className="mr-2" />
            <p>Delete</p>
          </div>
        </div>

        <div className="text-xs w-18 border-b border-gray-300 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1 shadow-md mb-2">
          <div className="text-xs w-32 p-2 cursor-pointer text-gray-700 flex flex-row rounded-full mx-1">
            <FaSmile className="mr-2" />
            <p className="font-semibold w-18">Comedy</p>
          </div>
          <div className="text-xs w-18 ml-24 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaEdit className="mr-2" />
            <p>Edit</p>
          </div>
          <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaTrash className="mr-2" />
            <p>Delete</p>
          </div>
        </div>

        <div className="text-xs w-18 border-b border-gray-300 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1 shadow-md mb-2">
          <div className="text-xs w-32 p-2 cursor-pointer text-gray-700 flex flex-row rounded-full mx-1">
            <GiKitchenKnives className="mr-2" />
            <p className="font-semibold w-18">Crime</p>
          </div>
          <div className="text-xs w-18 ml-24 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaEdit className="mr-2" />
            <p>Edit</p>
          </div>
          <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaTrash className="mr-2" />
            <p>Delete</p>
          </div>
        </div>

        <div className="text-xs w-18 border-b border-gray-300 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1 shadow-md mb-2">
          <div className="text-xs w-32 p-2 cursor-pointer text-gray-700 flex flex-row rounded-full mx-1">
            <FaMask className="mr-2" />
            <p className="font-semibold w-18">Drama</p>
          </div>
          <div className="text-xs w-18 ml-24 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaEdit className="mr-2" />
            <p>Edit</p>
          </div>
          <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaTrash className="mr-2" />
            <p>Delete</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-1/2 ml-12">
        <div className="text-xs w-18 border-b border-gray-300 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1 shadow-md mb-2">
          <div className="text-xs w-32 p-2 cursor-pointer text-gray-700 flex flex-row rounded-full mx-1">
            <FaBalanceScale className="mr-2" />
            <p className="font-semibold w-18">Dystopians</p>
          </div>
          <div className="text-xs w-18 ml-24 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaEdit className="mr-2" />
            <p>Edit</p>
          </div>
          <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaTrash className="mr-2" />
            <p>Delete</p>
          </div>
        </div>

        <div className="text-xs w-18 border-b border-gray-300 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1 shadow-md mb-2">
          <div className="text-xs w-32 p-2 cursor-pointer text-gray-700 flex flex-row rounded-full mx-1">
            <FaGhost className="mr-2" />
            <p className="font-semibold w-18">Horror</p>
          </div>
          <div className="text-xs w-18 ml-24 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaEdit className="mr-2" />
            <p>Edit</p>
          </div>
          <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaTrash className="mr-2" />
            <p>Delete</p>
          </div>
        </div>

        <div className="text-xs w-18 border-b border-gray-300 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1 shadow-md mb-2">
          <div className="text-xs w-32 p-2 cursor-pointer text-gray-700 flex flex-row rounded-full mx-1">
            <FaSearch className="mr-2" />
            <p className="font-semibold w-18">Mystery</p>
          </div>
          <div className="text-xs w-18 ml-24 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaEdit className="mr-2" />
            <p>Edit</p>
          </div>
          <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaTrash className="mr-2" />
            <p>Delete</p>
          </div>
        </div>

        <div className="text-xs w-18 border-b border-gray-300 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1 shadow-md mb-2">
          <div className="text-xs w-32 p-2 cursor-pointer text-gray-700 flex flex-row rounded-full mx-1">
            <FaHeart className="mr-2" />
            <p className="font-semibold w-18">Romance</p>
          </div>
          <div className="text-xs w-18 ml-24 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaEdit className="mr-2" />
            <p>Edit</p>
          </div>
          <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaTrash className="mr-2" />
            <p>Delete</p>
          </div>
        </div>

        <div className="text-xs w-18 border-b border-gray-300 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1 shadow-md mb-2">
          <div className="text-xs w-32 p-2 cursor-pointer text-gray-700 flex flex-row rounded-full mx-1">
            <GiStandingPotion className="mr-2" />
            <p className="font-semibold w-18">SciFi</p>
          </div>
          <div className="text-xs w-18 ml-24 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaEdit className="mr-2" />
            <p>Edit</p>
          </div>
          <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaTrash className="mr-2" />
            <p>Delete</p>
          </div>
        </div>

        <div className="text-xs w-18 border-b border-gray-300 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1 shadow-md mb-2">
          <div className="text-xs w-32 p-2 cursor-pointer text-gray-700 flex flex-row rounded-full mx-1">
            <RiKnifeBloodLine className="mr-2" />
            <p className="font-semibold w-18">Thriller</p>
          </div>
          <div className="text-xs w-18 ml-24 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaEdit className="mr-2" />
            <p>Edit</p>
          </div>
          <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
            <FaTrash className="mr-2" />
            <p>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
