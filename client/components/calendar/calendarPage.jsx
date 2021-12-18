import React, { useEffect, useState } from 'react';
import Calendar from './calendar.jsx';
import Sidebar from './sidebar.jsx';

const CalendarPage = ({ setLoggedIn, curUser, setCurUser }) => {
  const [events, setEvents] = useState([]);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:3000/calendar/${sessionStorage.getItem('username')}`,
      { method: 'GET' }
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        res.events.forEach((event) => {
          const dateArr = event.date.split('-');
          event.year = dateArr[0];
          event.month = dateArr[1];
          event.day = dateArr[2];
        });
        res.files.forEach((file) => {
          const dateArr = file.date.split('/');
          file.month = dateArr[0];
          file.day = dateArr[1];
          file.year = dateArr[2];
        });
        setEvents(res.events);
        setFiles(res.files);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='container-fluid' style={{ width: '100vw' }}>
      <div className='row'>
        <Sidebar
          setLoggedIn={setLoggedIn}
          curUser={curUser}
          setCurUser={setCurUser}
        />
        <Calendar events={events} files={files} />
      </div>
    </div>
  );
};
export default CalendarPage;
