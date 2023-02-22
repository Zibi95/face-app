//React
import { Outlet } from 'react-router-dom';

// Components
import { Particle } from '../../components/Particle';
import LoggedIn from '../../components/Navbar/LoggeIn';
import LoggedOut from '../../components/Navbar/LoggeOut';

// Types
import { UserData } from '../../App';

type NavbarProps = {
  user: UserData | string;
  setUser: React.Dispatch<React.SetStateAction<string | UserData>>;
};

const Navbar = ({ user, setUser }: NavbarProps) => {
  return (
    <>
      {user ? <LoggedIn setUser={setUser} /> : <LoggedOut />}
      <Outlet />
      <Particle />
    </>
  );
};

export default Navbar;
