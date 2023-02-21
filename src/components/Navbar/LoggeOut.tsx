import { Link } from 'react-router-dom';

const LoggedOut = (): JSX.Element => {
  return (
    <nav className="flex justify-end gap-10 m-10">
      <Link
        to={'/authentication/signin'}
        className="text-2xl text-white underline transition-all duration-500 cursor-pointer select-none hover:text-b-left hover:no-underline hover:font-semibold">
        Sign in
      </Link>
      <Link
        to={'/authentication/register'}
        className="text-2xl text-white underline transition-all duration-500 cursor-pointer select-none hover:text-b-left hover:no-underline hover:font-semibold">
        Register
      </Link>
    </nav>
  );
};

export default LoggedOut;
