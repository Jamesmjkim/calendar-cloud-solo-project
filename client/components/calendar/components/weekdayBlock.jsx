import React from 'react';

const WeekdayBlock = ({ day }) => {
  return (
    <span className='border border-primary m-2' style={{ width: '9vw' }}>
      {day}
    </span>
  );
};
export default WeekdayBlock;
