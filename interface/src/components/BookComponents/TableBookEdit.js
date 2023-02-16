import { useState, useEffect } from "react";
import { getDataBook } from "../../services/book";
import { FaEdit, FaPlusCircle, FaTrash } from "react-icons/fa";

function TableBook() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getDataBook((result) => setBooks(result));
  }, []);

  return (
    <>
      <div>
        <table className="w-full whitespace-nowrap">
          <caption className="text-lg font-semibold text-left text-primary1 bg-white ">
            Books <snap className="text-primary2">Table</snap>
          </caption>
          <thead>
            <tr className="h-16 w-full text-center text-md leading-none text-gray-800">
              <th className="font-normal text-left pl-4 w-10">No.</th>
              <th className="font-normal text-left pl-4 w-60">Publisher</th>
              <th className="font-normal text-left pl-4 w-60">Title</th>
              <th className="font-normal text-left pl-12 w-28">Price</th>
              <th className="font-normal text-left pl-12 w-60">Image</th>
              <th className="font-normal text-left pl-12 w-60">Desc</th>
              <th className="font-normal text-left pl-12 w-60">Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {books.length > 0 ? (
              books.map((e, i = 1) => {
                const { id } = e;
                return (
                  <tr
                    key={id}
                    className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                  >
                    <td className="pl-2 cursor-pointer">{i + 1}</td>
                    <td className="pl-12">
                      <a href={`/books/detail/${id}`}>
                      <p className="text-sm font-medium leading-none text-gray-800">
                        <u>
                        {e.title}
                        </u>
                      </p>
                      </a>
                    </td>
                    <td className="pl-12">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        {e?.["Publisher"]["pub_name"]}
                      </p>
                    </td>
                    <td className="pl-12">
                      <p>{e.price}</p>
                    </td>
                    <td className="pl-4 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-36 h-36">
                          <img
                            className="w-full h-full rounded"
                            src={`${e.image}`}
                            alt={"https://via.placeholder.com/100"}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="pl-12">
                      <p className="truncate ... w-60">{e.desc}</p>
                    </td>
                    <td className="pl-12">
                      <br />
                      <a href={`/books/update/${id}`}>
                      <div className="text-xs w-18 bg-primary2 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
                      <FaEdit className="mr-2" />
                        <p>Edit</p>
                      </div>
                      </a>
                      <br />
                      <div className="text-xs w-18 bg-red-600 p-2 cursor-pointer text-white flex flex-row rounded-full mx-1">
                        <FaTrash className="mr-2" />
                        <p>Delete</p>
                      </div>
                      <br />
                    </td>
                  </tr>
                );
              })
            ) : (
              <h4 className="text-center">Loading..</h4>
            )}
          </tbody>
          <div className="text-center w-18 bg-green-600 p-3 cursor-pointer text-white d-flex flex-row rounded-full mx-5 my-10">
            <p>Add Book's</p>
            <FaPlusCircle className="mx-auto text=center" />
          </div>
        </table>
      </div>
    </>
  );
}

export default TableBook;
