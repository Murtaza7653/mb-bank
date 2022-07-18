import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.jpg';

export default function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0F0326" }}>
      <img src={logo} alt="logo" className="mx-2" />
      {/* <h3 className='' style={{color: "white"}}>MB Banking Solutions</h3> */}

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
    </nav>


  )

}