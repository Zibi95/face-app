import logo from '../assets/face-detection.png';
import { Link, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { Particle } from './Particle';

const Navbar = () => {
  const { where } = useParams();

  const Signin = (
    <nav className="flex justify-end gap-7  m-10 ">
      <Link
        to={'signin'}
        className="select-none text-2xl text-white underline cursor-pointer transition-all duration-500 hover:text-b-left hover:no-underline hover:font-semibold"
      >
        Sign in
      </Link>
      <Link
        to={'register'}
        className="select-none text-2xl text-white underline cursor-pointer transition-all duration-500 hover:text-b-left hover:no-underline hover:font-semibold"
      >
        Register
      </Link>
    </nav>
  );

  const otherCases = (
    <nav className="flex justify-between items-center m-10 ">
      <Tilt scale={1.5} transitionSpeed={2500}>
        <div className="w-28 bg-b-right rounded-full p-4">
          <img className="" src={logo} alt="logo" />
        </div>
      </Tilt>
      <Link
        to={'signin'}
        className="select-none ml-auto text-2xl text-white underline cursor-pointer transition-all duration-500 hover:text-b-left hover:no-underline hover:font-semibold"
      >
        Sign out
      </Link>
    </nav>
  );
  return (
    <>
      <Particle />

      {where === 'signin' || where === 'register' ? Signin : otherCases}

      <Outlet />
    </>
  );
};

export default Navbar;
