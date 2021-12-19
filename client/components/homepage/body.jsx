import React from 'react';

const Body = () => {
  return (
    <div
      className='d-flex flex-column vh-100 pt-5'
      style={{ backgroundColor: '#F0F8FF' }}
    >
      <div className='container d-flex justify-content-evenly align-items-center '>
        <div className='fs-1 fw-bold pe-3'>
          Personal Calendar <br />
          With File Access
        </div>
        <img
          src={`http://localhost:${process.env.PORT}/static/demo_page.png`}
          alt=''
          className='rounded float-end img-fluid border shadow  rounded'
          // style={{ width: '800px', height: '600px' }}
        />
      </div>
      <div className='container d-flex flex-column mt-3'>
        <div className='fs-3'>Description</div>
        <div className='fs-5 fw-light flex-grow-1'>
          Calendar application to save events and upload files to the cloud.
          Keep track of events and be able to visualize when you created or
          uploaded files to cloud and access them on the browser. In addition
          see all your events and files on a single page to see what you have
          coming up or find a certain file you may have uploaded to the cloud.
          Sign up today and start using Calendar Cloud!
        </div>
      </div>
    </div>
  );
};
export default Body;
