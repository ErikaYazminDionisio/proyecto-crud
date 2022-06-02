import React from 'react'
import "./Navbar.css"

const Navbar = ({isScrolling}) => {
  return (
    <nav className='navbar' >
        <div className="navbar-logo">
            Your name
        </div>
    </nav>
  );
};

export default Navbar;