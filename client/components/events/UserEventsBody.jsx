import React from 'react';

const UserEventsBody = ({ eventName, date, description, deleteEvent }) => {
  return (
    <div className='container' style={{ padding: '0px 12px 0px 12px' }}>
      <div className='row'>
        <div className='col-3 border'>{date}</div>
        <div className='col-3 border'>{eventName}</div>
        <div className='col-5 border'>{description}</div>
        <button className='col-1 border' id={eventName} onClick={deleteEvent}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default UserEventsBody;
