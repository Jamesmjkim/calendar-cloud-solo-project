import React from 'react';
import { Link } from 'react-router-dom';

const Body = ({ loginSubmit }) => {
  return (
    <div
      className='container d-flex justify-content-center align-items-center'
      style={{ height: '50vh' }}
    >
      <div className='card ' style={{ width: '50%' }}>
        <div className='card-body'>
          <h5 className='card-title'>Login</h5>
          <form id='loginForm' onSubmit={loginSubmit}>
            <div className='mb-3'>
              <label htmlFor='username' className='form-label'>
                Username
              </label>
              <input
                type='text'
                className='form-control'
                id='username'
                name='username'
                placeholder='Type your username'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                placeholder='Type your password'
              />
            </div>
            <input
              type='submit'
              className='btn btn-primary mb-2'
              value='Login'
            />
          </form>
          <button className='btn btn-secondary'>
            <Link to='/register' className='text-decoration-none text-white'>
              Register
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Body;
