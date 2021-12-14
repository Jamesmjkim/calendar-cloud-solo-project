import React from 'react';
import Sidebar from '../calendar/Sidebar.jsx';
import Body from './Body.jsx';

const Settings = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};
export default Settings;
