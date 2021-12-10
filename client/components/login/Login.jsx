import React from 'react';
import Navbar from './Navbar.jsx';
import Body from './Body.jsx';

function loginSubmit() {
  const form = document.getElementById('loginForm');
  //   console.log(form.username.value);
  //   console.log(form.password.value);
  const loginInfo = new FormData();
  loginInfo.append('username', form.username.value);
  loginInfo.append('password', form.password.value);
  //   console.log(loginInfo.get());
  fetch('http://localhost:3000/login', {
    method: 'POST',
    mode: 'cors',
    body: loginInfo,
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
const Login = () => {
  return (
    <div>
      <Navbar />
      <Body loginSubmit={loginSubmit} />
    </div>
  );
};
export default Login;
