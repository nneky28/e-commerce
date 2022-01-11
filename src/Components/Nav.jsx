import React from 'react'
import {Link} from 'react-router-dom';
import "./Nav.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
function Nav() {
  const navigate = useNavigate();
  const {totalUniqueItems,isEmpty} = useCart();
  let user_id = localStorage.getItem('user_id');

  const logout =()=>{
   localStorage.clear();
    
   navigate('/');
  }

    return (
        <div>
            <nav className="navbar head1 navbar-expand-lg navbar-light bg-light">
          <div className=" ms-3">
          
            <div className="collapse navbar-collapse ms-5 px-1" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
                <li className="nav-item">
                  <a className="nav-link anc top-level ms-4 px-5 " href="#"><i className="far fa-envelope" /> ezemanneka28@gmail.com</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link anc top-level" href="#" ><i className="fas fa-phone-alt" /> +2348101231769</a>
                </li>
              </ul>
              <ul className="navbar-nav ul1 me-auto mb-2 mb-lg-0 ">
                <li className="nav-item dropdown p-2 ms-3">
                  <a className="nav-link dropdown-toggle anc top-level" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    English
                  </a>
                  <ul className="dropdown-menu top-level" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item top-level" href="#">Action</a></li>
                    <li><a className="dropdown-item top-level" href="#">Another action</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item top-level" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown p-2">
                  <a className="nav-link anc dropdown-toggle top-level" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                    USD
                  </a>
                  <ul className="dropdown-menu top-level" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item top-level" href="#">Action</a></li>
                    <li><a className="dropdown-item top-level" href="#">Another action</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item top-level" href="#">Something else here</a></li>
                  </ul>
                </li>
                {
                  user_id 
                  ? 
                  <li className="nav-item p-2" >
                  <a className="nav-link anc top-level" onClick={logout}>Logout<i className="far fa-user"/></a>
                   </li>
                   :

                <li className="nav-item p-2" >
               <Link className="nav-link anc top-level" to="/login" >Login<i className="far fa-user"/></Link>
                </li>
                }
                
                <li className="nav-item p-2" >
                  <Link className="nav-link anc top-level"to="#">wishlist <i className="far fa-heart" /></Link>
                </li>
                <li className="nav-item p-2" >
                <Link className="nav-link anc top-level" to="/cart">
              {isEmpty ? (
                   <i className="fas fa-shopping-cart" />
                   
              ):(
                <i className="fas fa-shopping-cart">{totalUniqueItems}</i>
              )}
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="navbar head2 navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand navbar-brand-b hekto " href="#">Hekto</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 me-3 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link anc2 active px-4 ms-5" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link anc2  ms-3"  to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link anc2  ms-3" to="/grid">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link anc2 ms-3" to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link anc2 ms-3" to="/shop">Shop</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link anc2 ms-3" to="/contact">Contact</Link>
                </li>
              </ul>
              <form className="d-flex"style={{ marginLeft:'30%',width:'97%' }} >
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button className="btd " type="submit"><i className="fas btn-search fa-search" /></button>
              </form>
            </div>
          </div>
        </nav>
        </div>
    )
}

export default Nav
