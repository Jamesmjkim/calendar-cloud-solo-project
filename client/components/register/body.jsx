import React from 'react';

const Body = ({ registerSubmit }) => {
  return (
    <div
      className='container d-flex justify-content-center align-items-center'
      style={{ height: '50vh' }}
    >
      <div className='card' style={{ width: '50%' }}>
        <div className='card-body'>
          <h5 className='card-title'>Register</h5>
          <form id='registerForm' onSubmit={registerSubmit}>
            <div className='row g-3 align-items-center mb-3'>
              <div className='col-3'>
                <label htmlFor='name' className='form-label'>
                  Name
                </label>
              </div>
              <div className='col-7'>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  name='name'
                  placeholder='Name'
                  required
                />
              </div>
            </div>
            <div className='row g-3 align-items-center mb-3'>
              <div className='col-3'>
                <label htmlFor='email' className='form-label'>
                  Email
                </label>
              </div>
              <div className='col-7'>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  name='email'
                  placeholder='example@email.com'
                  required
                />
              </div>
            </div>
            <div className='row g-3 align-items-center mb-3'>
              <div className='col-3'>
                <label htmlFor='username' className='form-label'>
                  Username
                </label>
              </div>
              <div className='col-7'>
                <input
                  type='text'
                  className='form-control'
                  id='username'
                  name='username'
                  placeholder='Username'
                  required
                />
              </div>
            </div>
            <div className='row g-3 align-items-center mb-3'>
              <div className='col-3'>
                <label htmlFor='password' className='form-label'>
                  Password
                </label>
              </div>
              <div className='col-7'>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  placeholder='Password'
                  required
                />
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <input
                type='submit'
                className='btn btn-primary'
                value='Create Account'
              />
            </div>
          </form>
          <div className='fs-5 text-danger text-center'>
            Registration Closed
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
