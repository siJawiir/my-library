import { useState, useEffect } from "react";
import Dropdown from "../../utils/Dropdown";
import { getLatestDataUser } from "../../services/user";

function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getLatestDataUser((result) => setUsers(result));
  }, []);

  return (
    <div>
      <table className="w-full whitespace-nowrap">
        <caption className="text-lg font-semibold text-left text-primary1 bg-white ">
          Latest <snap className="text-primary2">Users</snap>
        </caption>
        <thead>
          <tr className="h-16 w-full text-sm leading-none text-gray-800">
            <th className="font-normal text-left pl-4 w-60">No.</th>
            <th className="font-normal text-left pl-4 w-60">Image</th>
            <th className="font-normal text-left pl-4 w-60">Full Name</th>
            <th className="font-normal text-left pl-12 w-28">Phone</th>
            <th className="font-normal text-left pl-12 w-60">Address</th>
            <th className="font-normal text-left pl-12 w-60">City</th>
          </tr>
        </thead>
        {/* {console.log(users)} */}
        <tbody className="w-full">
          {users.length > 0 ? (
            users.map((e,i=1) => {
              const {id} = e;
              return (
                <tr key={id} className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                    <td className="pl-4 cursor-pointer">{i+1}</td>
                    <td className="pl-4 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-10 h-10">
                          <img
                            className="w-full h-full"
                            src={`${e.image}`}
                            alt={"https://via.placeholder.com/100"}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="pl-12">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        {e.fullname}
                      </p>
                    </td>
                    <td className="pl-12">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        {e.phone}
                      </p>
                    </td>
                    <td className="pl-12">
                      <p>{e.address}</p>
                    </td>
                    <td className="pl-12">
                      <p className="truncate ... w-60">{e.city}</p>
                    </td>
                    <td className="px-7 2xl:px-0">
                      <Dropdown />
                    </td>
                  </tr>
              );
            })
          ) : (
            <h4 className="text-center">Loading..</h4>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
