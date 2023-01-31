import React from 'react'
import '../styles/Sidebar.css'
// import StickyBox from 'react-sticky-box'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar pe-6 pb-3">
        <nav className="navbar">
            <div className="logo">
            <i className="bi bi-book-half"></i>
            <h3 className="text-logo">
                G<span>BS</span>
            </h3>
            </div>
            <div className="navbar-nav w-100">
                <Link className="nav-item nav-link active" to="#"><i className="bi bi-columns-gap"></i>Dashboard</Link>
                <Link className="nav-item nav-link" to="#"><i className="bi bi-kanban-fill"></i>Books</Link>
                <Link className="nav-item nav-link" to="#"><i className="bi bi-people-fill"></i>Users</Link>
                <Link className="nav-item nav-link" to="#"><i className="bi bi-gear-fill"></i>Settings</Link>
                <spacer className="my-5" />
                <div className="admin">
                    admin js
                </div>
            </div>
            
        </nav>
        {/* <div className="logo">
            <i className="bi bi-book-half"></i>
            <h1 className='logo-name'>GBS</h1>
        </div>
        <div className="sidebar-nav">
            <Link to="#"><i className="bi bi-columns-gap"></i>Dashboard</Link>
            <Link to="#"><i className="bi bi-kanban-fill"></i>Books</Link>
            <Link to="#"><i className="bi bi-people-fill"></i>Users</Link>
            <Link to="#"><i className="bi bi-gear-fill"></i>Settings</Link>
            <div className="admin justify-content-end">
                Admin
            </div>
        </div> */}
    </div>
  )
}

export default Sidebar