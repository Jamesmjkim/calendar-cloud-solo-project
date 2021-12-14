import React from 'react';
import Sidebar from '../calendar/Sidebar.jsx';
import Body from './Body.jsx';

const Settings = ({ setLoggedIn }) => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar setLoggedIn={setLoggedIn} />
        <Body />
      </div>
    </div>
  );
};
export default Settings;
