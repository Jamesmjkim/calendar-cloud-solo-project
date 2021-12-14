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
  const [loggedIn, setLoggedIn] = useState(false);
  if (!loggedIn) {
    return (
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/login'>
          <Login setLoggedIn={setLoggedIn} />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
    );
  } else
    return (
      <div>
        <Switch>
          <Route exact path='/calendar'>
            <CalendarPage setLoggedIn={setLoggedIn} />
          </Route>
          <Route path='/events'>
            <Events setLoggedIn={setLoggedIn} />
          </Route>
          <Route path='/files'>
            <Files setLoggedIn={setLoggedIn} />
          </Route>
          <Route path='/settings'>
            <Settings setLoggedIn={setLoggedIn} />
          </Route>
        </Switch>
      </div>
    );
};

export default App;
