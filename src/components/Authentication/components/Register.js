import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

const Register = ({ userInfo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { user, setUser } = userInfo;

  const navigate = useNavigate();

  const handleSubmit = () => {
    setUser('Zibi');
    navigate('/main');
    // const confirmPassword = confirmPassword.current.value;
  };

  return (
    <>
      <h2 className="text-4xl text-white font-bold mb-4 text-center">
        Register
      </h2>
      <Tilt
        className="flex items-center gap-4 flex-col w-fit mx-auto shadow-2xl border border-black px-20 py-24"
        tiltAxis="x"
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor="black"
        glarePosition="all"
      >
        <div className="mb-1">
          <label className="block text-white font-medium mb-1">Name</label>
          <input
            className="bg-gray-200 p-2 rounded-lg w-full"
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-1">
          <label className="block text-white font-medium mb-1">Email</label>
          <input
            className="bg-gray-200 p-2 rounded-lg w-full"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label className="block text-white font-medium mb-1">Password</label>
          <input
            className="bg-gray-200 p-2 rounded-lg w-full"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block text-white font-medium mb-1">
            Confirm Password
          </label>
          <input
            className="bg-gray-200 p-2 rounded-lg w-full"
            type="password"
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-b-right py-2 px-4 rounded-lg text-black font-extrabold hover:bg-b-left hover:text-white"
        >
          Register
        </button>
      </Tilt>
    </>
  );
};

export default Register;
