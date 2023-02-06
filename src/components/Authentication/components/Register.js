import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import AuthForm from '../../AuthForm';
const Register = ({ setUser, email, password, handleChange }) => {
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    const passwordMatches = password === confirmPassword;
    const credentials = {
      email,
      password,
      name,
    };
    passwordMatches &&
      fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })
        .then(response => response.json())
        .catch(err => console.log(err))
        .then(user => {
          if (Array.isArray(user)) {
            setUser(user[0]);
            navigate('/main');
          }
          console.log('Unable to register');
        })
        .catch(err => {
          console.log(err);
        });
  };

  const inputs = [
    {
      label: 'Name',
      type: 'text',
      name: 'name',
      value: name,
      onChange: setName,
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      value: email,
      onChange: handleChange,
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      value: password,
      onChange: handleChange,
    },
    {
      label: 'Confirm Password',
      type: 'password',
      name: 'confirm password',
      value: confirmPassword,
      onChange: setConfirmPassword,
    },
  ];

  return (
    <>
      <h2 className="mb-4 text-4xl font-bold text-center text-white">
        Register
      </h2>
      <AuthForm
        inputs={inputs}
        buttonName={'Register'}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Register;
