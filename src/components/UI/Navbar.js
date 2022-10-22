import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>

    <nav className="navbar navbar-dark navbar-expand-lg bg-dark shadow small mb-3">
        <div className="container-fluid">
            <a href="dash.html" className="navbar-brand">
                <span className="brand-gradient">Frozen Bar</span>
            </a>

            <button 

            className="navbar-toggler border-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbar-supported-content" 
            aria-controls="navbar-supported-content" 
            aria-expanded="false" 
            aria-label="Toggle Navigation">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>

            </button>

         
            <div className="collapse navbar-collapse" id="navbar-supported-content">
                <ul className="navbar-nav me-auto mb-3 mb-lg-0">

                   
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="dash.html">Home</a>
                    </li>

                   
                    <li className="nav-item">
                        <a className="nav-link active" href="employee_list.html">Users</a>
                    </li>

                   
                    <li className="nav-item">
                        <a className="nav-link active" href="item_list.html">Items</a>
                    </li>

                </ul>

            </div>

        </div>
    </nav>

    </div>
  );
}

export default Navbar;