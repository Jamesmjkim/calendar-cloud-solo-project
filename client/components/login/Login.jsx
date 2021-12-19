import React from 'react';
import Navbar from './navbar.jsx';
import Body from './body.jsx';
import { useHistory } from 'react-router-dom';

const Login = ({ setLoggedIn }) => {
  let history = useHistory();
  let attempts = 0;

  function loginSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('loginForm');
    const loginInfo = new FormData();
    loginInfo.append('username', form.username.value);
    loginInfo.append('password', form.password.value);
    fetch(`http://localhost:${process.env.PORT}/login`, {
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
          fetch(
            'https://goquotes-api.herokuapp.com/api/v1/random/1?type=tag&val=motivational',
            { method: 'GET' }
          )
            .then((quote) => quote.json())
            .then((quote) => {
              sessionStorage.setItem('quote', quote.quotes[0].text);
              sessionStorage.setItem('quoteAuthor', quote.quotes[0].author);
            });
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
