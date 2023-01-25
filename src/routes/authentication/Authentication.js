import { useHref } from 'react-router-dom';
import Register from '../../components/Authentication/components/Register';
import Signin from '../../components/Authentication/components/Signin';

const Authentication = props => {
  const sign = useHref();

  const { userInfo } = props;

  return sign === '/register' ? (
    <Register userInfo={userInfo} />
  ) : (
    <Signin userInfo={userInfo} />
  );
};

export default Authentication;
