import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid d-flex justify-space-between ms-3 me-3'>
          <a className='navbar-brand' href='/'>
            <img src='http://localhost:3000/static/logo.png' width='40px' />{' '}
            Calendar Cloud
          </a>
          <a className='nav-link active' aria-current='page' href='/login'>
            Sign In / Sign Up
          </a>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
