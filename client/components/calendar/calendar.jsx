import React from 'react';
import Weekdays from './components/weekdays.jsx';
import DayBlock from './components/dayBlock.jsx';

const Calendar = () => {
  const todayDate = new Date();
  const month = todayDate.getMonth();
  const day = todayDate.getDay();
  const year = todayDate.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1);

  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    month: 'long',
  });
  const monthString = dateString.split(' ')[0];
  const weekday = dateString.split(' ')[1];

  return (
    <div className='col'>
      <div className='container' style={{ height: '100vh' }}>
        <h3 className='fw-bold text-center mt-5'>{`${monthString} ${year}`}</h3>
        <Weekdays />
        <DayBlock weekday={weekday} daysInMonth={daysInMonth} />
      </div>
    </div>
  );
};
export default Calendar;
