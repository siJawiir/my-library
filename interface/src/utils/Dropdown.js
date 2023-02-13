import React, { useState } from "react";
import { FaEdit, FaEllipsisV, FaEyeDropper, FaInfo, FaTrash } from "react-icons/fa";

const Dropdown = () => {
  const [show, setShow] = useState(null);
  return (
    <div>
      {show === 0 ? (
        <button
          onClick={() => setShow(null)}
          className="focus:outline-none pl-7"
        >
          <FaEllipsisV className="text-gray-600" />
        </button>
      ) : (
        <button onClick={() => setShow(0)} className="focus:outline-none pl-7">
          <FaEllipsisV className="text-gray-600" />
        </button>
      )}
      {show === 0 && (
        <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-10 mr-6 ">
          <div className="text-xs w-full hover:bg-primary1 p-2 cursor-pointer hover:text-white flex flex-row">
            <FaInfo className="mr-2" />
            <p>Details</p>
          </div>
          <div className="text-xs w-full hover:bg-primary2 p-2 cursor-pointer hover:text-white flex flex-row">
            <FaEdit className="mr-2" />
            <p>Edit</p>
          </div>
          <div className="text-xs w-full hover:bg-red-600 p-2 cursor-pointer hover:text-white flex flex-row">
            <FaTrash className="mr-2" />
            <p>Delete</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
