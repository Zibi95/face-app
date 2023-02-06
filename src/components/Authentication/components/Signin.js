import Tilt from 'react-parallax-tilt';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../AuthForm';

const Signin = ({ setUser, email, password, handleChange }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    const credentials = {
      email,
      password,
    };

    fetch('http://localhost:3000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(response => response.json())
      .then(user => {
        if (Array.isArray(user)) {
          setUser(user[0]);
          navigate('/main');
        }
      })
      .catch(err => {
        console.log(err);
      });

    // setUser('Zibi');
    // navigate('/main');
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
      <h2 className="mb-4 text-4xl font-bold text-center text-white">
        Sign In
      </h2>
      <AuthForm
        inputs={inputs}
        buttonName={'Login'}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Signin;
