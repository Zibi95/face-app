import { Outlet } from 'react-router-dom';
import { Particle } from '../../components/Particle';

import LoggedIn from '../../components/Navbar/LoggeIn';
import LoggedOut from '../../components/Navbar/LoggeOut';

const Navbar = ({ userInfo }) => {
  const { user, setUser } = userInfo;

  return (
    <>
      <Particle />
      {user ? <LoggedIn setUser={setUser} /> : <LoggedOut />}
      <Outlet />
    </>
  );
};

export default Navbar;
