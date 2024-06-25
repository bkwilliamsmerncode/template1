import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="main">
        <div className="nav-left">
          <div className="logo">LOGO</div>
          <div className="website">Website Name</div>
        </div>
        <div className="nav-right">
          <Link to='/'>
            <div className="pages">Page 1</div>
          </Link>
          <Link to='/Page2'>
            <div className="pages">Page 2</div>
          </Link>
          <Link to='/Page3'>
            <div className="pages">Page 3</div>
          </Link>
          <Link to='/Page4'>
            <div className="pages">Page 4</div>
          </Link>
          <Link to='/Page5'>
            <div className="pages">Page 5</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
