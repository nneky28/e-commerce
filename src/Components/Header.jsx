import React from "react";
import HeaderCard from "./HeaderCard";



export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <HeaderCard />
        <nav className="navbar head3 navbar-expand-lg ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link anc2" aria-current="page" href="index.html">
                Home
              </a> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link anc2" href="pages.html">
                pages
              </a> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link anc2 active" href="#">
                shop left sidebar
              </a> */}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
