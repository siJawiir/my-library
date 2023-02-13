import React from "react";
import TableUser from "./TableUser";

function User() {
  return (
    <main className="flex flex-1 flex-col px-8 mt-28 items-center justify-center">
      <div className="my-2 p-8 bg-white rounded-lg h-full w-full ">
        <TableUser />
      </div>
    </main>
  );
}

export default User;
