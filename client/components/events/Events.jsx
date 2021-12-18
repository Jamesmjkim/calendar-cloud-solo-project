import React, { useEffect, useState } from 'react';
import Sidebar from '../calendar/sidebar.jsx';
import Body from './body.jsx';

const Events = ({ setLoggedIn }) => {
  const [showModal, setShowModal] = useState(false);
  const [userEvents, setUserEvents] = useState([]);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  useEffect(() => {
    fetch(`http://localhost:3000/event/${sessionStorage.getItem('username')}`, {
      method: 'GET',
      // mode: 'cors',
    })
      .then((res) => res.json())
      .then((res) => {
        setUserEvents(res);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(userEvents);
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar setLoggedIn={setLoggedIn} />
        <Body
          openModal={openModal}
          showModal={showModal}
          setShowModal={setShowModal}
          userEvents={userEvents}
          setUserEvents={setUserEvents}
        />
      </div>
    </div>
  );
};
export default Events;
