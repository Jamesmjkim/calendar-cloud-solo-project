import React from 'react';
import EventModal from './EventModal.jsx';

const Body = ({ openModal, showModal, setShowModal }) => {
  const eventSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById('newEvent');
    // console.log(form.date.value, form.eventName.value, form.description.value);
    const eventForm = new FormData();
    eventForm.append('date', form.date.value);
    eventForm.append('eventName', form.eventName.value);
    eventForm.append('description', form.description.value);
    eventForm.append('username', sessionStorage('username'));
    // console.log('here');
    fetch('http://localhost:3000/event', {
      method: 'POST',
      mode: 'cors',
      body: eventForm,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setShowModal(false);
  };
  return (
    <div className='col'>
      <div className='container-fluid d-flex flex-column ms-0 m-5'>
        <div className='container'>
          <h3 className='fw-bold'>List of Events</h3>
          <div>
            <button className='btn btn-primary btn-lg' onClick={openModal}>
              New Event
            </button>
            <EventModal
              showModal={showModal}
              setShowModal={setShowModal}
              eventSubmit={eventSubmit}
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
