import React from "react";
import "../styles/Sidebar.css";
// import StickyBox from 'react-sticky-box'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItem = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <i className="bi bi-columns-gap"></i>,
    },
    {
      path: '/books',
      name: 'Books',
      icon: <i className="bi bi-kanban-fill"></i>,
    },
    {
      path: '/users',
      name: 'Users',
      icon: <i className="bi bi-people-fill"></i>
    },
    {
      path: '/settings',
      name: 'Setting',
      icon: <i className="bi bi-gear-fill"></i>
    }
  ]

  return (
    // <div className="wrapper">
    //   <div className="sidebar">
    //     <div className="logo-item">
    //       <i className="bi bi-book-half"></i>
    //       <h3 className="text-logo">
    //         G<span>BS</span>
    //       </h3>
    //     </div>
    //     <div className="menu">
    //       <div className="menu-item">
    //         <Link className="link-item active" to="#">
    //           <i className="bi bi-columns-gap"></i>Dashboard
    //         </Link>
    //       </div>
    //       <div className="menu-item">
    //         <Link className="link-item" to="#">
    //           <i className="bi bi-kanban-fill"></i>Books
    //         </Link>
    //       </div>
    //       <div className="menu-item">
    //         <Link className="link-item" to="#">
    //           <i className="bi bi-people-fill"></i>Users
    //         </Link>
    //       </div>
    //       <div className="menu-item">
    //         <Link className="link-item" to="#">
    //           <i className="bi bi-gear-fill"></i>Settings
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="admin">
    //         <img className="rounded-circle admin-image" src="img/user.jpg" />
    //         <div className="admin-text">
    //         <h6 className="admin-name">Made</h6>
    //         <span>Admin</span>
    //         <button className="btn-logout"><i className="bi bi-box-arrow-right"></i>Logout</button>
    //     </div>
    //     </div>
        
       
    //   </div>
    // </div>
    <div className="wrapper">
      <div className="sidebar">
        <div className="top-section">
          <div className="logo-item">
            <i className="bi bi-book-half"></i>
            <h3 className="text-logo">
              G<span>BS</span>
            </h3>
          </div>
        </div>
        <div className="menu-item">
          {
            menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link active">
                <div className="icon">{item.icon}</div>
                <div className="link-text">{item.name}</div>
              </NavLink>
            ))
          }
        </div>
        <div className="bottom-section">
          <div className="admin">
            <img className="rounded-circle admin-image" src="img/user.jpg" />
            <h3 className="admin-text">
              Raihan
            </h3>
            <span>Admin</span>
            <button className="btn-logout"><i className="bi bi-box-arrow-right"></i>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
