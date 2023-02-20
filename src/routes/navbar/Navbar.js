import { Outlet } from 'react-router-dom';
import { Particle } from '../../components/Particle';

import LoggedIn from '../../components/Navbar/components/LoggeIn';
import LoggedOut from '../../components/Navbar/components/LoggeOut';

const Navbar = ({ userInfo }) => {
  const { user, setUser } = userInfo;

  return (
    <>
      <Particle />

      {user ? <LoggedIn setUser={setUser} /> : <LoggedOut setUser={setUser} />}
      <Outlet />
    </>
  );
};

export default Navbar;
