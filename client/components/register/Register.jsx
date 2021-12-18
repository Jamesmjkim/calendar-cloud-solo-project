import React from 'react';
import Navbar from './navbar.jsx';
import Body from './body.jsx';
import { useHistory } from 'react-router-dom';

const Register = () => {
  let history = useHistory();

  function registerSubmit(e) {
    const form = document.getElementById('registerForm');
    e.preventDefault();
    // console.log(form.password.value);
    console.log('here');

    const registerInfo = new FormData();
    registerInfo.append('name', form.name.value);
    registerInfo.append('email', form.email.value);
    registerInfo.append('username', form.username.value);
    registerInfo.append('password', form.password.value);

    fetch('http://localhost:3000/register', {
      method: 'POST',
      mode: 'cors',
      body: registerInfo,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.createdAccount === 'success') {
          history.push('/login');
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <Navbar />
      <Body registerSubmit={registerSubmit} />
    </div>
  );
};

export default Register;
