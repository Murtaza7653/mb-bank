import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.jpg';

export default function Navbar() {

  return (

    <nav className="navbar navbar-dark navbar-expand-lg" style={{ backgroundColor: "#0F0326" }}>
      <div class="container-fluid">
        <img src={logo} alt="logo" className="mx-2" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" style={{ fontSize: "20px" }}>
            <li className="nav-item active">
              <Link className="nav-link" to="/" style={{ color: "white" }}>Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/customers" style={{ color: "white" }}>Customers</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/transfer" style={{ color: "white" }}>Transfer</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/about" style={{ color: "white" }}>About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  )

}