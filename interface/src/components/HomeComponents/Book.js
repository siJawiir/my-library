import { useState, useEffect } from "react";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import { getLatestDataBook } from "../../services/book";

function Book() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getLatestDataBook((result) => setBooks(result));
  }, []);

  return (
    <div>
      <h1 className="text-lg font-semibold text-left text-primary1 bg-white ">
        Latest <snap className="text-primary2">Books</snap>
      </h1>
      <div className="flex flex-row my-4 items-center">
        {books.length > 0 ? (
          books.map((e) => {
            return (
              <div className="flex flex-row justify-center bg-white border border-gray-200 rounded-lg shadow mx-2 h-48 w-1/3">
          <img
            className="object-cover w-36 rounded-t-lg h-48"
            src={e.image}
            alt=""
          />
          <div className="flex flex-col text-center p-4 leading-normal">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 truncate w-48 ">
              {e.title}
            </h5>
            <p className="mb-6 font-normal text-gray-500 truncate w-48 ">
              Publisher: {e["Publisher"]?.["pub_name"]}
            </p>
            <p className="mb-8 text-xl font-bold text-green-700 truncate w-48 ">
              Rp. {e.price},-
            </p>
            <div className="flex flex-row ">
              <div className="text-xs w-18 bg-primary1 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
                <FaSearch className="mr-2" />
                <p>Details</p>
              </div>
              <div className="text-xs w-18 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
                <FaEdit className="mr-2" />
                <p>Edit</p>
              </div>
              <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
                <FaTrash className="mr-2" />
                <p>Delete</p>
              </div>
            </div>
          </div>
        </div>
            )
          })
        ):(
          <p>Loading</p>
        )}
      </div>
    </div>
  );
}

export default Book;
