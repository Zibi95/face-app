import logo from '../../assets/face-detection.png';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { Particle } from '../../components/Particle';

const Navbar = ({ userInfo }) => {
  const { user, setUser } = userInfo;

  const LoggedIn = (
    <nav className="flex justify-between m-10">
      <Tilt scale={1.5} transitionSpeed={2500}>
        <div className="p-4 rounded-full w-28 bg-b-right">
          <img className="" src={logo} alt="logo" />
        </div>
      </Tilt>

      <Link
        to={'/'}
        onClick={() => {
          setUser('');
        }}
        className="ml-auto text-2xl text-white underline transition-all duration-500 cursor-pointer select-none hover:text-b-left hover:no-underline hover:font-semibold"
      >
        Sign out
      </Link>
    </nav>
  );

  const LoggedOut = (
    <nav className="flex justify-end gap-10 m-10">
      <Link
        to={'/'}
        className="text-2xl text-white underline transition-all duration-500 cursor-pointer select-none hover:text-b-left hover:no-underline hover:font-semibold"
      >
        Sign in
      </Link>
      <Link
        to={'/register'}
        className="text-2xl text-white underline transition-all duration-500 cursor-pointer select-none hover:text-b-left hover:no-underline hover:font-semibold"
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
