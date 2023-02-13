import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import User from "../components/UserComponents/User";

function UserPage() {
  return (
    <div>
      <div className="flex w-full h-full bg-gray-100 font-sans text-gray-900">
        <Sidebar className="fixed" Users="text-primary1 border-primary2"/>
        <div>
          <Navbar />
          <User />
        </div>
      </div>
    </div>
  );
}

export default UserPage;
