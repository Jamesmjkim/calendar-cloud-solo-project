import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ setLoggedIn }) => {
  let name = sessionStorage.getItem('name');
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
        <Link className='navbar-brand' to='/'>
          <img src={`/static/logo.png`} width='50px' />
        </Link>
        <Link className='navbar-brand fs-4 fw-bold text-black' to='/'>
          Calendar Cloud
        </Link>
      </div>
      <div
        className='container d-flex flex-column mx-2'
        style={{ height: '20vh' }}
      >
        <p className='nav-brand fs-4 text-black'>
          Welcome, <br />
          {name}
        </p>
        <Link className='navbar-brand fs-4 text-black' to='/calendar'>
          Home
        </Link>
        <Link className='navbar-brand fs-4 text-black' to='/events'>
          Events
        </Link>
        <Link className='navbar-brand fs-4 text-black' to='/files'>
          Files
        </Link>
        <Link className='navbar-brand fs-4 text-black' to='/settings'>
          Settings
        </Link>
        <Link
          to='/'
          className='navbar-brand fs-4 text-black'
          onClick={() => {
            sessionStorage.clear();
            setLoggedIn(false);
          }}
        >
          Log Out
        </Link>
      </div>
      <div
        className='container d-flex flex-column justify-content-end mx-auto'
        style={{ height: '60vh' }}
      >
        <p className='fs-5 fst-italic'>
          {sessionStorage.getItem('quote')} <br />
          {sessionStorage.getItem('quoteAuthor')}
        </p>
        <p className='text-muted' style={{ fontSize: '12px' }}>
          Website created by James Kim
        </p>
      </div>
    </div>
  );
};
export default Sidebar;
