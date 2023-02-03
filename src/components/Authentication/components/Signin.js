import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { useNavigate } from 'react-router-dom';

const Signin = ({ userInfo }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = userInfo;

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

  return (
    <>
      <h2 className="text-4xl text-white font-bold mb-4 text-center">
        Sign In
      </h2>
      <Tilt
        tiltAxis="x"
        className="flex items-center gap-4 flex-col w-fit mx-auto shadow-2xl border border-black px-20 pt-24 pb-10"
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor="black"
        glarePosition="all"
      >
        <div className="mb-1">
          <label className="block text-white font-medium mb-1">Email</label>
          <input
            className="bg-gray-200 p-2 rounded-lg w-full"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-white font-medium mb-1">Password</label>
          <input
            className="bg-gray-200 p-2 rounded-lg w-full"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-b-right mb-10 py-2 px-4 rounded-lg text-black font-extrabold hover:bg-b-left hover:text-white"
        >
          Login
        </button>
      </Tilt>
    </>
  );
};

export default Signin;
