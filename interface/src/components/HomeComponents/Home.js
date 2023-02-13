import React from "react";
import Book from "./Book";
import Stat from "./Stat";
import Table from "./TableHome";

function Home() {
  return (
    <div>
      <main className="flex flex-1 flex-col px-8 mt-28 items-center justify-center">
        <div className="my-2 p-8 bg-white rounded-lg h-full w-full ">
          <Stat />
        </div>
        <div className="my-2 p-8 bg-white rounded-lg h-full w-full ">
          <Table />
        </div>
        <div className="my-2 p-8 bg-white rounded-lg h-full w-full ">
          <Book />
        </div>
      </main>
    </div>
  );
}
export default Home;
