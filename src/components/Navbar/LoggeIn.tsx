//React modules
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
//png
import logo from '../../assets/face-detection.png';
//Types
import { UserData } from '../../App';
type LoggedInProps = {
  setUser: React.Dispatch<React.SetStateAction<string | UserData>>;
};

const LoggedIn = ({ setUser }: LoggedInProps) => {
  return (
    <nav className="flex justify-between m-10">
      <Tilt
        scale={1.5}
        transitionSpeed={2500}>
        <div className="p-4 rounded-full w-28 bg-b-right">
          <img
            className=""
            src={logo}
            alt="logo"
          />
        </div>
      </Tilt>

      <Link
        to={'/authentication/signin'}
        onClick={() => {
          setUser('');
        }}
        className="ml-auto text-2xl text-white underline transition-all duration-500 cursor-pointer select-none hover:text-b-left hover:no-underline hover:font-semibold">
        Sign out
      </Link>
    </nav>
  );
};

export default LoggedIn;
