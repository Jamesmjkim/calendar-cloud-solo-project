import React from 'react';
import FileUploadModal from './fileUploadModal.jsx';

const Body = ({ openModal, showModal, setShowModal }) => {
  const onFileLoad = (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append('file', file);
    data.append('username', sessionStorage.getItem('username'));
    data.append('date', new Date().toDateString());
    fetch('http://localhost:3000/upload', {
      method: 'POST',
      mode: 'cors',
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.filePath);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };
  return (
    <div className='col'>
      <div className='container-fluid d-flex flex-column ms-0 m-5'>
        <div className='container'>
          <h3 className='fw-bold'>List of Files</h3>
          <div>
            <button className='btn btn-primary btn-lg' onClick={openModal}>
              New File
            </button>
            <FileUploadModal
              showModal={showModal}
              setShowModal={setShowModal}
              onFileLoad={onFileLoad}
            />
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
                <div className='col-3 border'>Date Created</div>
                <div className='col-3 border'>File Name</div>
                <div className='col-3 border'>File Type</div>
                <div className='col-3 border'>File size</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
