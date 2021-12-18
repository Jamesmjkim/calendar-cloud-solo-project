import React, { useState } from 'react';
import EventBlock from './eventBlock.jsx';
import FileBlock from './fileBlock.jsx';

const DaySquare = ({ day, curDate, fileToday, eventToday }) => {
  // console.log(fileToday, eventToday);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showFileModal, setShowFileModal] = useState(false);
  const openEventModal = () => {
    setShowEventModal((prev) => !prev);
  };
  const openFileModal = () => {
    setShowFileModal((prev) => !prev);
  };
  return (
    <div
      className='card border border-secondary'
      style={{
        width: '10vw',
        height: '15vh',
        maxWidth: '179.19px',
        margin: '2px 1.25px 2px 1.25px',
      }}
    >
      <div className='card-body'>
        {curDate ? (
          <div className='card-title fs-6 text-danger'>{day}</div>
        ) : (
          <div className='card-title fs-6'>{day}</div>
        )}
        <div className='container-fluid p-0'>
          {fileToday.length !== 0 || eventToday.length !== 0 ? (
            <div>
              {eventToday.length !== 0 ? (
                <EventBlock
                  eventToday={eventToday}
                  showEventModal={showEventModal}
                  setShowEventModal={setShowEventModal}
                  openEventModal={openEventModal}
                />
              ) : null}
              {fileToday.length !== 0 ? (
                <FileBlock
                  fileToday={fileToday}
                  showFileModal={showFileModal}
                  setShowFileModal={setShowFileModal}
                  openFileModal={openFileModal}
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default DaySquare;
