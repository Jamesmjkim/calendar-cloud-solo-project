import React from 'react';

const Body = ({ loginSubmit }) => {
  return (
    <div
      className='container d-flex justify-content-center align-items-center'
      style={{ height: '50vh' }}
    >
      <div className='card ' style={{ width: '50%' }}>
        <div className='card-body'>
          <h5 className='card-title'>Login</h5>
          <form id='loginForm'>
            <div className='mb-3'>
              <label htmlFor='username' className='form-label'>
                Username
              </label>
              <input
                type='text'
                className='form-control'
                id='username'
                name='username'
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
              />
            </div>
            <input
              type='button'
              className='btn btn-primary'
              value='Login'
              onClick={() => loginSubmit()}
            />
          </form>
            <button className='btn btn-secondary'><a href="/register" className='text-decoration-none text-white'>Register</a></button>
        </div>
      </div>
    </div>
  );
};
export default Body;
