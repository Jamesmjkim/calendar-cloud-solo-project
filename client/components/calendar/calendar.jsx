import React, { useState } from 'react';
import Weekdays from './components/weekdays.jsx';
import DayBlock from './components/dayBlock.jsx';

const Calendar = () => {
  const [curMonth, setCurMonth] = useState(0);

  const todayDate = new Date();
  const month = todayDate.getMonth();
  const year = todayDate.getFullYear();
  const daysInMonth = new Date(year, month + 1 + curMonth, 0).getDate();
  const firstDayOfMonth = new Date(year, month + curMonth, 1);

  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    month: 'long',
    year: 'numeric',
  });
  const [monthString, currYear, weekday] = dateString.split(' ');
  // console.log(monthString, currYear, weekday);

  return (
    <div className='col'>
      <div className='container-fluid my-5'>
        <div className='container d-flex flex-column'>
          <h3 className='fw-bold text-start'>{`${monthString} ${currYear}`}</h3>
          <div className='mb-3'>
            <button
              className='btn me-md-2'
              type='button'
              style={{ backgroundColor: '#87CEFA' }}
              onClick={() => setCurMonth(curMonth - 1)}
            >
              Prev
            </button>
            <button
              className='btn'
              type='button'
              style={{ backgroundColor: '#87CEFA' }}
              onClick={() => setCurMonth(curMonth + 1)}
            >
              Next
            </button>
          </div>
        </div>

        <Weekdays />
        <DayBlock weekday={weekday} daysInMonth={daysInMonth} />
      </div>
    </div>
  );
};
export default Calendar;
