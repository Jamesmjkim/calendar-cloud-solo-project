import React from 'react';
import Calendar from './Calendar.jsx';
import Sidebar from './sidebar.jsx';

const CalendarPage = () => {
  return (
    <div className='container-fluid' style={{ width: '100vw' }}>
      <div className='row'>
        <Sidebar />
        <Calendar />
      </div>
    </div>
  );
};
export default CalendarPage;
