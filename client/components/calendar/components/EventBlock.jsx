import React from 'react';
import EventBlockModal from './EventBlockModal.jsx';

const EventBlock = ({
  eventToday,
  showEventModal,
  setShowEventModal,
  openEventModal,
}) => {
  const { eventName, date, description } = eventToday[0];

  return (
    <button
      className='border border-primary text-start mb-1 p-0'
      style={{
        fontSize: '11px',
        width: '8vw',
        background: 'none',
        maxWidth: '143.36px',
      }}
      onClick={openEventModal}
    >
      <EventBlockModal
        showEventModal={showEventModal}
        setShowEventModal={setShowEventModal}
        eventName={eventName}
        date={date}
        description={description}
      />
      {eventName}
    </button>
  );
};
export default EventBlock;
