import React from 'react';

const Body = () => {
  return (
    <div className='col'>
      <div className='container-fluid d-flex flex-column ms-0 m-5'>
        <div className='container'>
          <h3 className='fw-bold'>List of Events</h3>
          <div>
            <button className='btn btn-primary btn-lg'>New Event</button>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='d-flex justify-content-center'>
          <div
            className='border border-dark'
            style={{ height: '75vh', width: '70vw' }}
          >
            <div className='container' style={{ padding: '0px 12px 0px 12px' }}>
              <div className='row'>
                <div className='col-3 border'>Date</div>
                <div className='col-3 border'>Event</div>
                <div className='col-6 border'>Description</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
