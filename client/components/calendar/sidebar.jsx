import React from 'react';

const Sidebar = () => {
  return (
    <div
      className='container col-2'
      style={{
        width: '15vw',
        height: '100vh',
        backgroundColor: '#F0F8FF',
        minWidth: '120px',
      }}
    >
      <div
        className='d-flex flex-column justify-content-start my-4'
        style={{ width: '14vw', height: '15vh' }}
      >
        <a className='navbar-brand' href='/'>
          <img src='http://localhost:3000/static/logo.png' width='50px' />
        </a>
        <a className='navbar-brand fs-4 fw-bold text-black' href='/'>
          Calendar Cloud
        </a>
      </div>
      <div
        className='container d-flex flex-column mx-2'
        style={{ height: '20vh' }}
      >
        <a className='navbar-brand fs-4 text-black' href='/homepage'>
          Home
        </a>
        <a className='navbar-brand fs-4 text-black' href='/events'>
          Events
        </a>
        <a className='navbar-brand fs-4 text-black' href='/files'>
          Files
        </a>
        <a className='navbar-brand fs-4 text-black' href='/settings'>
          Settings
        </a>
        <a
          href='/'
          className='navbar-brand fs-4 text-black'
          onClick={() => setLoggedIn(false)}
        >
          Log Out
        </a>
      </div>
      <div
        className='container d-flex flex-column justify-content-end mx-auto'
        style={{ height: '60vh' }}
      >
        <p className='fs-5'>quotes from api</p>
        <p className='text-muted' style={{ fontSize: '12px' }}>
          Website created by James Kim
        </p>
      </div>
    </div>
  );
};
export default Sidebar;
