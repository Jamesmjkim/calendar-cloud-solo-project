import React, { useState, useEffect } from 'react';
import Sidebar from '../calendar/sidebar.jsx';
import Body from './body.jsx';

const Files = ({ setLoggedIn }) => {
  const [showModal, setShowModal] = useState(false);
  const [userFiles, setUserFiles] = useState([]);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  useEffect(() => {
    fetch(
      `http://localhost:3000/upload/${sessionStorage.getItem('username')}`,
      {
        method: 'GET',
      }
    )
      .then((res) => res.json())
      .then((res) => {
        res.forEach((file) => {
          file.fileSize = formatBytes(file.fileSize);
        });
        setUserFiles(res);
      })
      .catch((err) => console.log(err));
  }, []);
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
          formatBytes={formatBytes}
        />
      </div>
    </div>
  );
};
export default Files;
