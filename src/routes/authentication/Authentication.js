import { useHref } from 'react-router-dom';
import Register from '../../components/Authentication/components/Register';
import Signin from '../../components/Authentication/components/Signin';

const Authentication = ({ userInfo }) => {
  const endpoint = useHref();

  return endpoint === '/register' ? (
    <Register userInfo={userInfo} />
  ) : (
    <Signin userInfo={userInfo} />
  );
};

export default Authentication;
