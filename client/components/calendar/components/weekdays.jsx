import React from 'react';
import WeekdayBlock from './WeekdayBlock.jsx';

const Weekdays = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayBlock = [];
  days.forEach((day, index) => {
    dayBlock.push(<WeekdayBlock day={day} key={index} />);
  });
  return (
    <div
      className='container d-flex text-center justify-content-start'
      style={{ width: '100vw' }}
    >
      {dayBlock}
    </div>
  );
};
export default Weekdays;
