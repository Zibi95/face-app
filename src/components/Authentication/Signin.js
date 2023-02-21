import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Authentication } from './auth.helper';
import AuthForm from './AuthForm';
import { Loader } from '../Loader';

const Signin = ({ setUser, email, password, handleChange, loading, setLoading }) => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    const credentials = {
      email,
      password,
    };
    const user = await Authentication('http://localhost:3000/signin', credentials);
    setLoading(false);
    if (user === 'Wrong credentials') {
      return setError("User and password don't match!");
    }
    if (user === 'Not enough data') {
      return setError('You should fill all the inputs!');
    } else {
      setUser(user[0]);
      navigate('/');
    }
  };

  const inputs = [
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
  ];

  return (
    <>
      <h2 className="mb-4 text-4xl font-bold text-center text-white">Sign In</h2>
      <AuthForm
        inputs={inputs}
        buttonName={'Login'}
        handleSubmit={handleSubmit}
        error={error}
      />
      {loading && <Loader />}
    </>
  );
};

export default Signin;
