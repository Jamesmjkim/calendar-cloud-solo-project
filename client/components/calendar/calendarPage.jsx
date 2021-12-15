import React from 'react';
import Calendar from './Calendar.jsx';
import Sidebar from './Sidebar.jsx';

const CalendarPage = ({ setLoggedIn, curUser, setCurUser }) => {
  return (
    <div className='container-fluid' style={{ width: '100vw' }}>
      <div className='row'>
        <Sidebar
          setLoggedIn={setLoggedIn}
          curUser={curUser}
          setCurUser={setCurUser}
        />
        <Calendar />
      </div>
    </div>
  );
};
export default CalendarPage;
