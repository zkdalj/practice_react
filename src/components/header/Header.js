import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (<>    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <NavLink to="/" className="nav-link " aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/aboutus" className="nav-link " aria-current="page" href="#">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/career" className="nav-link " aria-current="page" href="#">Career</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contactus" className="nav-link " aria-current="page" href="#">Contact us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products" className="nav-link " aria-current="page" href="#">Product List</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
    </>
  );
}
