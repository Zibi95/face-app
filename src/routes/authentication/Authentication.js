import { useEffect, useState } from 'react';
import { useHref } from 'react-router-dom';

// Components
import Register from '../../components/Authentication/components/Register';
import Signin from '../../components/Authentication/components/Signin';

const Authentication = ({ setUser }) => {
  const endpoint = useHref();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const initialState = () => {
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    initialState();
  }, [endpoint]);

  const handleChange = event => {
    event.target.name === 'email' ? setEmail(event.target.value) : setPassword(event.target.value);
  };

  return endpoint === '/authentication/register' ? (
    <Register
      setUser={setUser}
      email={email}
      password={password}
      handleChange={handleChange}
    />
  ) : (
    <Signin
      setUser={setUser}
      email={email}
      password={password}
      handleChange={handleChange}
    />
  );
};

export default Authentication;
