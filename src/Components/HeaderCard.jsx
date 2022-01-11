import React from 'react'
import "./Header.css";
import {Link} from 'react-router-dom';

export default function HeaderCard({title}) {
  return (
    <div className="header">
    <div className="container">
      <h1 id="header">{title || "shop Grid Default"}</h1>
      <nav className="navbar head3 navbar-expand-lg">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-3">
          <li className="nav-item">
             <Link className="nav-link anc2" aria-current="page" to="/">
              Home
            </Link> 
          </li>
          <li className="nav-item">
           <Link className="nav-link anc2" to="/grid">
              pages
            </Link> 
          </li>
          <li className="nav-item">
            <Link className="nav-link anc2 active" to="/left">
              shop left sidebar
            </Link> 
          </li>
        </ul>
      </nav>
    </div>
  </div>
  )
}
