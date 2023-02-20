import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RegisterCall } from './auth.helper';
import AuthForm from './AuthForm';
import { Loader } from '../../Loader';

const Register = ({ setUser, email, password, handleChange, loading, setLoading }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    const passwordMatches = password === confirmPassword;
    const credentials = {
      email,
      password,
      name,
    };
    if (!passwordMatches) {
      setLoading(false);
      return setError("Passwords don't match");
    }
    const user = await RegisterCall(credentials);
    setLoading(false);
    if (user === 'Email already used') {
      return setError('Email already in use');
    }
    if (user === 'Not enough data') {
      return setError('You should fill all the inputs');
    }
    if (user) {
      setUser(user[0]);
      return navigate('/');
    }
  };

  const onChangeRegister = event => {
    event.target.name === 'name' ? setName(event.target.value) : setConfirmPassword(event.target.value);
  };

  const inputs = [
    {
      label: 'Name',
      type: 'text',
      name: 'name',
      value: name,
      onChange: onChangeRegister,
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
      onChange: onChangeRegister,
    },
  ];

  return (
    <>
      <h2 className="mb-4 text-4xl font-bold text-center text-white">Register</h2>
      <AuthForm
        inputs={inputs}
        buttonName={'Register'}
        handleSubmit={handleSubmit}
        error={error}
      />
      {loading && <Loader />}
    </>
  );
};

export default Register;
