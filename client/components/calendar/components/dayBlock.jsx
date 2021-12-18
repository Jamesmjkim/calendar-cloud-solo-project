import React from 'react';
import DaySquare from './daySquare.jsx';
import PadDays from './padDays.jsx';

const DayBlock = ({
  weekday,
  daysInMonth,
  curDate,
  curMonth,
  currYear,
  events,
  files,
}) => {
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
    let eventToday = [];
    let fileToday = [];
    events.forEach((event) => {
      if (Number(event.day) === i - padDays) eventToday.push(event);
    });
    files.forEach((file) => {
      if (Number(file.day) === i - padDays) fileToday.push(file);
    });
    // console.log(eventToday);

    if (i <= padDays) {
      blocks.push(<PadDays key={i} />);
    } else {
      if (i - padDays === curDate) {
        blocks.push(
          <DaySquare
            day={i - padDays}
            curDate={true}
            key={i}
            fileToday={fileToday}
            eventToday={eventToday}
          />
        );
      } else {
        blocks.push(
          <DaySquare
            day={i - padDays}
            curDate={false}
            key={i}
            fileToday={fileToday}
            eventToday={eventToday}
          />
        );
      }
    }
  }

  return (
    <div
      className='container d-flex flex-wrap justify-content-start '
      style={{ width: '100vw' }}
    >
      {blocks}
    </div>
  );
};
// d-flex justify-content-start flex-wrap

export default DayBlock;
