import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid d-flex justify-space-between ms-3 me-3'>
          <Link className='navbar-brand' to='/'>
            <img src='/static/logo.png' width='40px' /> Calendar Cloud
          </Link>
          <Link className='nav-link active' to='/login'>
            Sign In / Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
