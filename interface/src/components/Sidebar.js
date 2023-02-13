import React from "react";
import Logo from "../images/Logo.png";
import Avatar from "../images/avatar.png";
import { RiDashboardFill } from "react-icons/ri";
import { ImBooks } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { MdLogout, MdSettings } from "react-icons/md";
import ToolTips from "../utils/ToolTips";

function Sidebar(props) {
  return (
    <div>
      <aside className="h-screen sticky top-0 bg-white border-r border-gray-200 w-24 flex flex-col items-center">
        <div className="flex items-center justify-center border-b border-gray-400">
          <img src={Logo} className="h-24 w-16" />
        </div>
        <nav className="flex flex-l flex-col gap-y-4 pt-16">
          <a
            className={`group p-2 text-grey hover:text-primary1 border-b-2 border-double hover:border-primary2
    border-transparent hover:border-current cursor-pointer select-none ${ props.Home }` }
            href="/"
          >
            <RiDashboardFill className="h-10 w-10 " />
            <ToolTips>Dashboard</ToolTips>
          </a>
          
          <a
            className={`group p-2 text-grey hover:text-primary1 border-b-2 border-double hover:border-primary2
    border-transparent hover:border-current cursor-pointer select-none ${ props.Books }` }
            href="books/"
          >
            <ImBooks className="h-10 w-10 " />
            <ToolTips>Books</ToolTips>
          </a>
          <a
            className={`group p-2 text-grey hover:text-primary1 border-b-2 border-double hover:border-primary2
    border-transparent hover:border-current cursor-pointer select-none ${ props.Users }` }
            href="/users"
          >
            <FaUsers className="h-10 w-10 " />
            <ToolTips>Users</ToolTips>
          </a>
          <a
            className={`group p-2 text-grey hover:text-primary1 border-b-2 border-double hover:border-primary2
    border-transparent hover:border-current cursor-pointer select-none ${ props.Settings }` }
            href="/settings"
          >
            <MdSettings className="h-10 w-10 " />
            <ToolTips>Settings</ToolTips>
          </a>
        </nav>
        <div className="flex items-center justify-center">
          <div className="absolute bottom-0 p-2">
            <img src={Avatar} className="w-16 h-16 object-center" />
            <p className="text-center text-base">Raihan</p>
            <p className="text-center text-sm text-primary1 font-medium">
              Admin
            </p>
            <button
              type="button"
              class="text-white bg-secondary3 rounded-full text-sm px-2 py-1 text-center inline-flex mt-4"
            >
              <MdLogout />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
