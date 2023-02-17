import React from "react";
import BookMenu from "../BookMenu";
import TableAuthor from "./TableAuthor";

function Authors() {
  return (
    <div>
      <main className="flex flex-1 flex-col px-8 mt-28 items-center justify-center">
        <div className="my-2 p-8 bg-white rounded-lg h-full w-full ">
          <BookMenu Authors="font-semibold bg-gray-50" />
        </div>
        <div className="my-2 p-8 bg-white rounded-lg h-full w-full ">
          <TableAuthor Authors="font-semibold bg-gray-50" />
        </div>
      </main>
    </div>
  );
}

export default Authors;
