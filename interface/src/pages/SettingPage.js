import React from "react";
import Navbar from "../components/Navbar";
import Setting from "../components/SettingComponents/Setting";
import Sidebar from "../components/Sidebar";

function SettingPage() {
  return (
    <div>
      <div className="flex w-full h-full bg-gray-100 font-sans text-gray-900">
        <Sidebar className="fixed" Settings="text-primary1" />
        <div>
          <Navbar />
          <Setting />
        </div>
      </div>
    </div>
  );
}

export default SettingPage;
