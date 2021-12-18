import React from 'react';
import Sidebar from '../calendar/sidebar.jsx';
import Body from './body.jsx';

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
