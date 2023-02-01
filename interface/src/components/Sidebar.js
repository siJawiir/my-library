import React from "react";
import "../styles/Sidebar.css";
// import StickyBox from 'react-sticky-box'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    // <div className="sidebar pe-6 pb-3">
    //     <nav className="navbar">
    //         <div className="logo">
    //         <i className="bi bi-book-half"></i>
    //         <h3 className="text-logo">
    //             G<span>BS</span>
    //         </h3>
    //         </div>
    //         <div className="navbar-nav w-100">
    //             <Link className="nav-item nav-link active" to="#"><i className="bi bi-columns-gap"></i>Dashboard</Link>
    //             <Link className="nav-item nav-link" to="#"><i className="bi bi-kanban-fill"></i>Books</Link>
    //             <Link className="nav-item nav-link" to="#"><i className="bi bi-people-fill"></i>Users</Link>
    //             <Link className="nav-item nav-link" to="#"><i className="bi bi-gear-fill"></i>Settings</Link>
    //             <spacer className="my-5" />
    //             <div className="admin">
    //                 <img className="rounded-circle admin-image" src="img/user.jpg" />
    //                 <div className="ms-3">
    //                     <h6 className="mb-0">Made</h6>
    //                 <span>Admin</span>
    //             </div>
    //             </div>
    //         </div>
    //     </nav>
    // </div>
    <div className="wrapper">
      <div className="sidebar">
        <div className="logo-item">
          <i className="bi bi-book-half"></i>
          <h3 className="text-logo">
            G<span>BS</span>
          </h3>
        </div>
        <div className="menu">
          <div className="menu-item">
            <Link className="link-item active" to="#">
              <i className="bi bi-columns-gap"></i>Dashboard
            </Link>
          </div>
          <div className="menu-item">
            <Link className="link-item" to="#">
              <i className="bi bi-kanban-fill"></i>Books
            </Link>
          </div>
          <div className="menu-item">
            <Link className="link-item" to="#">
              <i className="bi bi-people-fill"></i>Users
            </Link>
          </div>
          <div className="menu-item">
            <Link className="link-item" to="#">
              <i className="bi bi-gear-fill"></i>Settings
            </Link>
          </div>
        </div>
        <div className="admin">
            <img className="rounded-circle admin-image" src="img/user.jpg" />
            <div className="admin-text">
            <h6 className="admin-name">Made</h6>
            <span>Admin</span>
            <button className="btn-logout"><i className="bi bi-box-arrow-right"></i>Logout</button>
        </div>
        </div>
        
       
      </div>
    </div>
  );
};

export default Sidebar;
