import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid ms-3 me-3'>
          <a className='navbar-brand' href='/'>
            <img src='http://localhost:3000/static/logo.png' width='40px' />{' '}
            Calendar Cloud
          </a>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
