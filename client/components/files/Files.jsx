import React, { useState } from 'react';
import Sidebar from '../calendar/Sidebar.jsx';
import Body from './Body.jsx';

const Files = ({ setLoggedIn }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  console.log(showModal);
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar setLoggedIn={setLoggedIn} />
        <Body
          openModal={openModal}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};
export default Files;
