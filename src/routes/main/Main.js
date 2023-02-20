import React, { useEffect, useState } from 'react';
// Helper functions
import { fetchClarifaiFaceDetection, calculateFaceLocation } from './main.helper';
// Components
import FormImage from '../../components/FormImage';
import DetectionImage from '../../components/DetectionImage';
import { Loader } from '../../components/Loader';
// Style
import '../../App.css';

function Main({ user }) {
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState([]);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');

  const initialState = () => {
    setImageUrl('');
    setBox([]);
    setError('');
    setStatus('idle');
  };

  useEffect(() => {
    return () => {
      initialState();
    };
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    const imageUrl = event.target[0].value;
    setBox([]);
    setImageUrl(imageUrl);
    setStatus('loading');
    const data = await fetchClarifaiFaceDetection(imageUrl);
    console.log(data);
    if (data === 'Fetch failed') {
      setStatus('rejected');
      return setError(data);
    }
    setError('');
    return calculateFaceLocation(data, setBox, setStatus);
  };

  if (status === 'idle' && user) {
    return <FormImage handleSubmit={handleSubmit} />;
  }

  if (status === 'loading') {
    return (
      <>
        <FormImage handleSubmit={handleSubmit} />
        <Loader />
        <DetectionImage
          hidden={true}
          imageUrl={imageUrl}
          box={box}
        />
      </>
    );
  }

  if (status === 'resolved') {
    return (
      <>
        <FormImage handleSubmit={handleSubmit} />
        <DetectionImage
          hidden={false}
          imageUrl={imageUrl}
          box={box}
        />
      </>
    );
  }

  if (status === 'rejected') {
    return (
      <>
        <FormImage handleSubmit={handleSubmit} />
        <div className="text-2xl font-bold text-center text-white">{error}, try again!</div>
      </>
    );
  }
  return (
    <>
      <div className="text-2xl font-bold text-center text-white">LOG IN FIRST!</div>
    </>
  );
}

export default Main;
