import React from 'react';

const WeekdayBlock = ({ day }) => {
  return (
    <span
      className='border border-primary m-auto'
      style={{ width: '9vw', maxWidth: '161.27px' }}
    >
      {day}
    </span>
  );
};
export default WeekdayBlock;
