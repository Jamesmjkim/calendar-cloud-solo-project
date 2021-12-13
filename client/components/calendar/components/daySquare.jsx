import React from 'react';

const DaySquare = ({ day, curDate }) => {
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
      </div>
    </div>
  );
};
export default DaySquare;
