import React, { useState } from "react";
import {
  FaEdit,
  FaEllipsisV,
  FaEyeDropper,
  FaInfo,
  FaSortDown,
  FaTrash,
} from "react-icons/fa";

const SortButton = () => {
  const [show, setShow] = useState(null);
  return (
    <div>
      {show === 0 ? (
        <button
          onClick={() => setShow(null)}
          className="focus:outline-none pl-7 flex flex-row border-b"
        >
          <p className="mr-2 text-sm">Sort by</p>
          <FaSortDown className="text-gray-600" />
        </button>
      ) : (
        <button
          onClick={() => setShow(0)}
          className="focus:outline-none pl-7 flex flex-row border-b"
        >
          <p className="mr-2 text-sm">Sort by</p>
          <FaSortDown className="text-gray-600" />
        </button>
      )}
      {show === 0 && (
        <div className="dropdown-content bg-white shadow w-32 absolute z-30 -right-10 mr-6 ">
          <div className="text-xs w-32 hover:bg-gray-300 p-2 cursor-pointer hover:text-gray-700 flex flex-row">
            <p>Name</p>
          </div>
          <div className="text-xs w-32 hover:bg-gray-300 p-2 cursor-pointer hover:text-gray-700 flex flex-row">
            <p>Recent</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SortButton;
