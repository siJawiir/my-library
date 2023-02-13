import React from "react";

function ToolTips({ children }) {
  return (
    <div className="absolute inset-x-20 -my-10 group-hover:flex hidden">
      <div className="whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold drop-shadow-lg">
        {children}
      </div>
    </div>
  );
}

export default ToolTips;
