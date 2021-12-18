import React from 'react';
import Modal from 'react-modal';

const EventModal = ({ showModal, setShowModal, eventSubmit }) => {
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
    <>
      <Modal isOpen={showModal} ariaHideApp={false} style={customStyles}>
        <div className='modal-dialog m-0'>
          <div
            className='modal-content'
            // style={{ height: '50vh', width: '50vw' }}
          >
            <div className='modal-header'>
              <h5 className='modal-title'>Create New Event</h5>
              <button
                type='button'
                className='btn-close'
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className='modal-body'>
              <div
                className='input-group mb-3'
                // style={{ width: '40vw', height: '40vh' }}
              >
                <form
                  id='newEvent'
                  onSubmit={eventSubmit}
                  style={{ width: '30vw' }}
                >
                  <div className='mb-3'>
                    <label htmlFor='date' className='form-label'>
                      Date
                    </label>
                    <input
                      type='date'
                      className='form-control'
                      id='date'
                      name='date'
                      //   value={new Date()}
                    />
                  </div>
                  <div className='mb-3 col-sm-10'>
                    <label htmlFor='eventName' className='form-label'>
                      Event Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='eventName'
                      name='eventName'
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='description' className='form-label'>
                      Description
                    </label>
                    <textarea
                      className='form-control'
                      id='description'
                      name='description'
                      rows='3'
                    ></textarea>
                  </div>
                  <input
                    type='submit'
                    className='btn btn-primary'
                    value='Create'
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default EventModal;
