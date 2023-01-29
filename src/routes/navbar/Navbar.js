import logo from '../../assets/face-detection.png';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { Particle } from '../../components/Particle';

const Navbar = ({ userInfo }) => {
  const { user, setUser } = userInfo;
  console.log(user);
  const LoggedIn = (
    <nav className="flex justify-between m-10">
      <Tilt scale={1.5} transitionSpeed={2500}>
        <div className="w-28 bg-b-right rounded-full p-4">
          <img className="" src={logo} alt="logo" />
        </div>
      </Tilt>

      <Link
        to={'/'}
        onClick={() => {
          setUser('');
        }}
        className="select-none ml-auto text-2xl text-white underline cursor-pointer transition-all duration-500 hover:text-b-left hover:no-underline hover:font-semibold"
      >
        Sign out
      </Link>
    </nav>
  );

  const LoggedOut = (
    <nav className="flex m-10 gap-10 justify-end">
      <Link
        to={'/'}
        className="select-none  text-2xl text-white underline cursor-pointer transition-all duration-500 hover:text-b-left hover:no-underline hover:font-semibold"
      >
        Sign in
      </Link>
      <Link
        to={'/register'}
        className="select-none  text-2xl text-white underline cursor-pointer transition-all duration-500 hover:text-b-left hover:no-underline hover:font-semibold"
      >
        Register
      </Link>
    </nav>
  );
  return (
    <>
      <Particle />
      {user ? LoggedIn : LoggedOut}
      <Outlet />
    </>
  );
};

export default Navbar;
