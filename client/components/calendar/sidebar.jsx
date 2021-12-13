import React from 'react';

const Sidebar = () => {
  return (
    <div
      className='container col-2'
      style={{ height: '100vh', backgroundColor: '#F0F8FF' }}
    >
      <div
        className='d-flex flex-column justify-content-start'
        style={{ width: '100vw' }}
      >
        <a className='navbar-brand' href='/'>
          <img src='http://localhost:3000/static/logo.png' width='50px' />
        </a>
        <a className='navbar-brand fs-4 text-black' href='/'>
          Calendar Cloud
        </a>
      </div>
    </div>
  );
};
export default Sidebar;
