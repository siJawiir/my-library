import React from "react";
import BookMenu from "../BookMenu";
import CategoryList from "./CategoryList";

function Categories() {
  return (
    <div>
      <main className="flex flex-1 flex-col px-8 mt-28 items-center justify-center">
        <div className="my-2 p-8 bg-white rounded-lg h-full w-full ">
          <BookMenu Categories="font-semibold bg-gray-50" />
        </div>
        <div className="my-2 p-8 bg-white rounded-lg h-full w-full ">
          <CategoryList />
        </div>
      </main>
    </div>
  );
}

export default Categories;
