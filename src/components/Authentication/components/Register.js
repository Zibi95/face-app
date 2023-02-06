import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

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

  return (
    <>
      <h2 className="mb-4 text-4xl font-bold text-center text-white">
        Register
      </h2>
      <Tilt
        className="flex flex-col items-center gap-4 px-20 py-24 mx-auto border border-black shadow-2xl w-fit"
        tiltAxis="x"
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor="black"
        glarePosition="all"
      >
        <div className="mb-1">
          <label className="block mb-1 font-medium text-white">Name</label>
          <input
            className="w-full p-2 bg-gray-200 rounded-lg"
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-1">
          <label className="block mb-1 font-medium text-white">Email</label>
          <input
            className="w-full p-2 bg-gray-200 rounded-lg"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-1">
          <label className="block mb-1 font-medium text-white">Password</label>
          <input
            className="w-full p-2 bg-gray-200 rounded-lg"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-1 font-medium text-white">
            Confirm Password
          </label>
          <input
            className="w-full p-2 bg-gray-200 rounded-lg"
            type="password"
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="px-4 py-2 font-extrabold text-black rounded-lg bg-b-right hover:bg-b-left hover:text-white"
        >
          Register
        </button>
      </Tilt>
    </>
  );
};

export default Register;
