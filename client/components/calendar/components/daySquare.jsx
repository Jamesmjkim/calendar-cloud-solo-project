import React from 'react';

const DaySquare = ({ day }) => {
  return (
    <span
      className='border border-secondary mb-2'
      style={{ width: '10vw', height: '15vh' }}
    >
      {day}
    </span>
  );
};
export default DaySquare;
