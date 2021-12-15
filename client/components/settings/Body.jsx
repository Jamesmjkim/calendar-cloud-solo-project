import React from 'react';

const Body = () => {
  return (
    <div className='col'>
      <div className='container-fluid d-flex flex-column ms-0 m-5'>
        <div className='container'>
          <h3 className='fw-bold'>Settings</h3>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='d-flex justify-content-center'>
          <div
            className='border border-dark'
            style={{ height: '35vh', width: '70vw' }}
          >
            <div className='container'>
              <div className='fs-4 fw-bold'>Account Information</div>
              <div className='conatiner'>
                <ul className='m-4' style={{ listStyleType: 'none' }}>
                  <li className='fs-5 fw-bold my-2'>
                    Name:{' '}
                    <span className='fw-normal'>
                      {sessionStorage.getItem('name')}
                    </span>
                  </li>
                  <li className='fs-5 fw-bold my-2'>
                    Username:{' '}
                    <span className='fw-normal'>
                      {sessionStorage.getItem('username')}
                    </span>
                  </li>
                  <li className='fs-5 fw-bold my-2'>
                    email:{' '}
                    <span className='fw-normal'>
                      {sessionStorage.getItem('email')}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
