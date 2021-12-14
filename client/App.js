import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import CalendarPage from './components/calendar/CalendarPage.jsx';
import Events from './components/events/Events.jsx';
import Files from './components/files/Files.jsx';
import Settings from './components/settings/Settings.jsx';

const App = function () {
  // const [loggedIn, setLoggedIn] = useState(false);
  // if (!loggedIn) {
  //   return (
  //     <Routes>
  //       <Route exact path='/' element={<HomePage />} />
  //       <Route path='login' element={<Login />} />
  //       <Route path='register' element={<Register />} />
  //     </Routes>
  //   );
  // } else
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        {/* <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} /> */}
      </Switch>
      {/* <HomePage /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <CalendarPage /> */}
      {/* <Events /> */}
      {/* <Files /> */}
      {/* <Settings /> */}
    </div>
  );
};

export default App;
