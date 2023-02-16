import React from "react";
import Sidebar from "../../components/Sidebar";
import BookAdd from "../../components/BookComponents/BookAdd";
import Navbar from "../../components/Navbar";

function BookPageAdd() {
  return (
    <>
      <div className="flex w-full h-full bg-gray-100 font-sans text-gray-900">
        <Sidebar className="fixed" Books="text-primary1" />
        <div>
          <Navbar/>
        </div>
          <BookAdd/>
      </div>
    </>
  );
}

export default BookPageAdd;
