import React from 'react';
import Navbar from './Navbar.jsx';
import Body from './Body.jsx';

const Register = () => {
  return (
    <div>
      <Navbar />
      <Body registerSubmit={registerSubmit} />
    </div>
  );
};

function registerSubmit() {
  const form = document.getElementById('registerForm');
  console.log(form.password.value);

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
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
export default Register;
