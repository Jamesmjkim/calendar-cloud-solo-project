import React from 'react';
import DaySquare from './daySquare.jsx';
import PadDays from './padDays.jsx';

const DayBlock = ({ weekday, daysInMonth }) => {
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
  for (let i = 1; i < daysInMonth + padDays; i++) {
    if (i <= padDays) {
      blocks.push(<PadDays key={i} />);
    } else {
      blocks.push(<DaySquare day={i - padDays} key={i} />);
    }
  }

  return (
    <div
      className='container d-flex justify-content-start flex-wrap'
      style={{ width: '100vw' }}
    >
      {/* <div className='row'>{blocks}</div> */}
      {blocks}
    </div>
  );
};
// d-flex justify-content-start flex-wrap

export default DayBlock;
