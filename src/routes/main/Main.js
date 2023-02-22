import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Helper functions
import { fetchClarifaiFaceDetection, calculateFaceLocation } from './main.helper';
// Components
import FormImage from '../../components/Main/FormImage';
import DetectionImage from '../../components/Main/DetectionImage';
import { Loader } from '../../components/Loader';
// Style
import '../../App.css';

function Main({ user }) {
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const initialState = () => {
    setImageUrl('');
    setBox([]);
    setError('');
    setLoading(false);
  };

  useEffect(() => {
    return () => {
      initialState();
    };
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    initialState();
    setLoading(true);
    const imageUrl = event.target[0].value;
    setImageUrl(imageUrl);
    const data = await fetchClarifaiFaceDetection(imageUrl);
    if (!data.status) {
      setLoading(false);
      return setError(data);
    }
    setError('');
    return calculateFaceLocation(data, setBox, setLoading);
  };

  if (typeof user === 'string')
    return (
      <div className="p-20 mx-auto text-4xl font-bold text-white bg-black bg-opacity-25 shadow-2xl w-fit">
        LOG IN FIRST!
        <br />
        <Link
          to={'authentication/signin'}
          className="block p-3 mx-auto mt-5 text-2xl transition-all rounded-lg w-fit bg-b-right hover:bg-b-left hover:-translate-y-1 active:translate-y-0">
          Sign in!
        </Link>
      </div>
    );

  return (
    <>
      <FormImage handleSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <div className="text-2xl font-bold text-center text-white">{error}, try again!</div>}
      <DetectionImage
        hidden={loading}
        imageUrl={imageUrl}
        box={box}
      />
    </>
  );
}

export default Main;
