import React from "react";
import Sidebar from "../../components/Sidebar";
import BookUpdate from "../../components/BookComponents/BookUpdate";
import Navbar from "../../components/Navbar";

function BookPageUpdate() {
  return (
    <>
      <div className="flex w-full h-full bg-gray-100 font-sans text-gray-900">
        <Sidebar className="fixed" Books="text-primary1" />
        <div>
          <Navbar/>
        </div>
          <BookUpdate/>
      </div>
    </>
  );
}

export default BookPageUpdate;
