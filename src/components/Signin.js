import { useParams } from 'react-router-dom';

const Signin = ({ match }) => {
  const data = useParams();
  console.log(data);
  return (
    <div>
      <h1>HELLO</h1>
    </div>
  );
};

export default Signin;
