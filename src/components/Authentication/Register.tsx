import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// helper f-ction
import { Authentication } from './auth.helper';
// Components
import AuthForm from './AuthForm';
import { Loader } from '../Loader';
// Types
import { AuthenticationProps } from './Signin';

const Register = ({ setUser, email, password, handleChange, loading, setLoading }: AuthenticationProps) => {
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
    const user = await Authentication('https://face-app-api.onrender.com/register', credentials);
    setLoading(false);
    if (user?.code === '23505') {
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

  const onChangeRegister: React.ChangeEventHandler<HTMLInputElement> = event => {
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
      {loading ? (
        <Loader />
      ) : (
        <AuthForm
          inputs={inputs}
          buttonName={'Register'}
          handleSubmit={handleSubmit}
          error={error}
        />
      )}
    </>
  );
};

export default Register;
