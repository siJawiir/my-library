import React from "react";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <div className="fixed w-full z-20 top-0">
        <header className="flex h-24 flex-col justify-center items-end border-b border-gray-200 bg-white px-8">
          <div className="flex items-end justify-center rounded-xl">
            <form className="grow mr-24">
              <label for="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaSearch className="text-grey" />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-grey text-gray-900 text-sm rounded-lg focus:ring-primary1 focus:border-primary1 block w-full pl-10 p-2.5 "
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
