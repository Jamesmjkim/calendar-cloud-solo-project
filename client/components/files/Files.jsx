import React from 'react';
import Sidebar from '../calendar/Sidebar.jsx';
import Body from './Body.jsx';

const Files = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar />
        <Body />
      </div>
    </div>
  );
};
export default Files;
