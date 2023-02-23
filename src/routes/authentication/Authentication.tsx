import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import Register from '../../components/Authentication/Register';
import Signin from '../../components/Authentication/Signin';
// Types
import { UserData } from '../../App';

const Authentication = ({ setUser }: { setUser: React.Dispatch<React.SetStateAction<string | UserData>> }) => {
  const endpoint = useParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const initialState = () => {
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    initialState();
  }, [endpoint]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    event.target.name === 'email' ? setEmail(event.target.value) : setPassword(event.target.value);
  };

  return endpoint['*'] === 'register' ? (
    <Register
      setUser={setUser}
      email={email}
      password={password}
      handleChange={handleChange}
      loading={loading}
      setLoading={setLoading}
    />
  ) : (
    <Signin
      setUser={setUser}
      email={email}
      password={password}
      handleChange={handleChange}
      loading={loading}
      setLoading={setLoading}
    />
  );
};

export default Authentication;
