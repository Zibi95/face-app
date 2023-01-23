import logo from '../assets/face-detection.png';

import Tilt from 'react-parallax-tilt';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center m-10 ">
      <Tilt scale={1.5} transitionSpeed={2500}>
        <div className="w-28 bg-b-right rounded-full p-4">
          <img className="" src={logo} alt="logo" />
        </div>
      </Tilt>

      <span className="select-none text-2xl text-white underline cursor-pointer transition-all duration-500 hover:text-b-left hover:no-underline hover:font-semibold">
        Sign out
      </span>
    </nav>
  );
};

export default Navbar;
