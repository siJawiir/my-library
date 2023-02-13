import React from "react";
import Home from "../components/HomeComponents/Home";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function HomePage() {
  return (
    <div>
      <div className="flex w-full h-full bg-gray-100 font-sans text-gray-900">
        <Sidebar className="fixed" Home="text-primary1"/>
        <div>
          <Navbar />
          <Home />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
