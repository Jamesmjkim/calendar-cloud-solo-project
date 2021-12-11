import React from 'react';
import WeekdayBlock from './weekdayBlock.jsx';

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
      className='container d-flex text-center justitfy-content-start'
      style={{ width: '100vw' }}
    >
      {dayBlock}
    </div>
  );
};
export default Weekdays;
