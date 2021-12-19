import React, { useState } from 'react';
import FileUploadModal from './fileUploadModal.jsx';
import UserFilesBody from './userFilesBody.jsx';

const Body = ({
  openModal,
  showModal,
  setShowModal,
  userFiles,
  setUserFiles,
  formatBytes,
}) => {
  const filesBox = [];
  const [fileToBig, setFileTooBig] = useState(false);

  const onFileLoad = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const maxFileSize = 5242880;
    if (file.size < maxFileSize) {
      const data = new FormData();
      data.append('file', file);
      data.append('username', sessionStorage.getItem('username'));
      data.append('date', new Date().toLocaleDateString('en-US')); // mm/dd/yyyy
      fetch('/upload', {
        method: 'POST',
        mode: 'cors',
        body: data,
      })
        .then((res) => res.json())
        .then((res) => {
          res.forEach((file) => {
            file.fileSize = formatBytes(file.fileSize);
          });
          setUserFiles(res);
        })
        .catch((err) => {
          if (err) {
            console.log(err);
          }
        });
      setShowModal(false);
      setFileTooBig(false);
    } else {
      setFileTooBig(true);
    }
  };
  const deleteFile = (e) => {
    const details = e.target.id;
    fetch(`/upload/${details}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((res) => {
        res.forEach((file) => {
          file.fileSize = formatBytes(file.fileSize);
        });
        setUserFiles(res);
      })
      .catch((err) => console.log(err));
  };
  userFiles.sort((a, b) => (a.date > b.date ? 1 : -1));
  userFiles.forEach((file, i) => {
    filesBox.push(
      <UserFilesBody
        date={file.date}
        fileName={file.fileName}
        fileType={file.fileType}
        fileSize={file.fileSize}
        path={file.path}
        deleteFile={deleteFile}
        key={i}
      />
    );
  });

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
              fileToBig={fileToBig}
            />
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='d-flex justify-content-center'>
          <div
            className='border border-dark'
            style={{ height: '75vh', width: '70vw', maxWidth: '1252.39px' }}
          >
            <div className='container' style={{ padding: '0px 12px 0px 12px' }}>
              <div className='row'>
                <div className='col-3 border'>Date Created</div>
                <div className='col-3 border'>File Name</div>
                <div className='col-3 border'>File Type</div>
                <div className='col-3 border'>File size</div>
              </div>
            </div>
            {filesBox}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
