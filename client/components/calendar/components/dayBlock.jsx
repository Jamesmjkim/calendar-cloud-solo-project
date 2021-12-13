import React from 'react';
import DaySquare from './daySquare.jsx';
import PadDays from './padDays.jsx';

const DayBlock = ({ weekday, daysInMonth, curDate }) => {
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const blocks = [];
  const padDays = weekdays.indexOf(weekday);
  //   console.log(padDays);
  for (let i = 1; i <= daysInMonth + padDays; i++) {
    if (i <= padDays) {
      blocks.push(<PadDays key={i} />);
    } else {
      if (i - padDays === curDate) {
        blocks.push(<DaySquare day={i - padDays} curDate={true} key={i} />);
      } else {
        blocks.push(<DaySquare day={i - padDays} curDate={false} key={i} />);
      }
    }
  }

  return (
    <div
      className='container d-flex flex-wrap justify-content-start'
      style={{ width: '100vw' }}
    >
      {blocks}
    </div>
  );
};
// d-flex justify-content-start flex-wrap

export default DayBlock;
