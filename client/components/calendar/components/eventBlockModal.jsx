import React from 'react';
import Modal from 'react-modal';

const EventBlockModal = ({ showEventModal, eventName, date, description }) => {
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
      <Modal isOpen={showEventModal} ariaHideApp={false} style={customStyles}>
        <div className='modal-dialog m-0'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>{eventName}</h5>
            </div>
            <div className='modal-body'>
              {'Date: ' + date} <br />
              {'Description: ' + description}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default EventBlockModal;
