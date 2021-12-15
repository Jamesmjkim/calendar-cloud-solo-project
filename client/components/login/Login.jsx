import React from 'react';
import Navbar from './Navbar.jsx';
import Body from './Body.jsx';
import { useHistory } from 'react-router-dom';

const Login = ({ setLoggedIn }) => {
  let history = useHistory();
  let attempts = 0;

  function loginSubmit(e) {
    const form = document.getElementById('loginForm');
    e.preventDefault();
    const loginInfo = new FormData();
    loginInfo.append('username', form.username.value);
    loginInfo.append('password', form.password.value);
    fetch('http://localhost:3000/login', {
      method: 'POST',
      mode: 'cors',
      body: loginInfo,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.login) {
          attempts = 0;
          // setCurUser(res.userInfo);
          sessionStorage.setItem('name', `${res.userInfo.name}`);
          sessionStorage.setItem('username', `${res.userInfo.username}`);
          sessionStorage.setItem('email', `${res.userInfo.email}`);

          sessionStorage.setItem('loggedIn', true);

          setLoggedIn(true);
          history.push('/calendar');
        } else if (attempts > 2) {
          history.push('/register');
        }
        attempts++;
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <Navbar />
      <Body loginSubmit={loginSubmit} />
    </div>
  );
};
export default Login;
