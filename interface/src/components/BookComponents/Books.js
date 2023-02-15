import React from "react";
// import BookPageAdd from "../../pages/books/BookPageAdd";
import BookMenu from "../BookMenu";
import TableBook from "./TableBook";



function Books() {
  return (
    <div>
      <main className="flex flex-1 flex-col px-8 mt-28 items-center justify-center">
        <div className="my-2 p-8 bg-white rounded-lg h-full w-full ">
          <BookMenu Books="font-semibold bg-gray-50" />
        </div>
          <div>
          <TableBook/>
          </div>
      </main>
    </div>
  );
}

export default Books;
