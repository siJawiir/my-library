import React from "react";
import BookAddForm from "./BookAddForm";

function BookAdd() {
  return (
    <>
      <main className="flex flex-1 flex-col px-8 mt-28 items-center justify-center">
        <div className="my-2 p-8 bg-white rounded-lg ">
          <div className="flex flex-col">
            <p className="text-lg font-bold text-primary1 mb-8">
              Add <span className="text-primary2">Book</span>
            </p>
            <div className="flex flex-row w-full mt-4">
              <div className="flex flex-col w-1/2">
                <BookAddForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default BookAdd;
