import React from 'react';
import Modal from 'react-modal';

const FileUploadModal = ({
  showModal,
  setShowModal,
  onFileLoad,
  fileToBig,
}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <Modal isOpen={showModal} ariaHideApp={false} style={customStyles}>
      <div className='modal-dialog m-0'>
        <div className='modal-content '>
          <div className='modal-header'>
            <h5 className='modal-title'>Upload File</h5>
            <button
              type='button'
              className='btn-close'
              onClick={() => setShowModal(false)}
            ></button>
          </div>
          <div className='modal-body'>
            <div className='input-group mb-3'>
              <input
                type='file'
                className='form-control'
                id='inputGroupFile'
                onChange={onFileLoad}
              />
              <label className='input-group-text' htmlFor='inputGroupFile'>
                Upload
              </label>
            </div>
            {fileToBig ? (
              <div className='text-danger'>
                File too large, Choose file less than 5 mb
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FileUploadModal;
