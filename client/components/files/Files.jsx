import React, { useState, useEffect } from 'react';
import Sidebar from '../calendar/Sidebar.jsx';
import Body from './Body.jsx';

const Files = ({ setLoggedIn }) => {
  const [showModal, setShowModal] = useState(false);
  const [userFiles, setUserFiles] = useState([]);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    fetch(
      `http://localhost:3000/upload/${sessionStorage.getItem('username')}`,
      {
        method: 'GET',
      }
    )
      .then((res) => res.json())
      .then((res) => setUserFiles(res))
      .catch((err) => console.log(err));
  }, []);
  // console.log(showModal);
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar setLoggedIn={setLoggedIn} />
        <Body
          openModal={openModal}
          showModal={showModal}
          setShowModal={setShowModal}
          userFiles={userFiles}
          setUserFiles={setUserFiles}
        />
      </div>
    </div>
  );
};
export default Files;
