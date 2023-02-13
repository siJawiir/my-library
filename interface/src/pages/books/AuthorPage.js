import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Authors from "../../components/AuthorComponents/Authors";

function AuthorPage() {
  return (
    <div>
      <div className="flex w-full h-full bg-gray-100 font-sans text-gray-900">
        <Sidebar className="fixed" Books="text-primary1" />
        <div>
          <Navbar />
          <Authors />
        </div>
      </div>
    </div>
  );
}

export default AuthorPage;
