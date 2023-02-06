import Tilt from 'react-parallax-tilt';
import { useNavigate } from 'react-router-dom';

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

  return (
    <>
      <h2 className="mb-4 text-4xl font-bold text-center text-white">
        Sign In
      </h2>
      <Tilt
        tiltAxis="x"
        className="flex flex-col items-center gap-4 px-20 pt-24 pb-10 mx-auto border border-black shadow-2xl w-fit"
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor="black"
        glarePosition="all"
      >
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
        <div className="mb-5">
          <label className="block mb-1 font-medium text-white">Password</label>
          <input
            className="w-full p-2 bg-gray-200 rounded-lg"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 mb-10 font-extrabold text-black rounded-lg bg-b-right hover:bg-b-left hover:text-white"
        >
          Login
        </button>
      </Tilt>
    </>
  );
};

export default Signin;
