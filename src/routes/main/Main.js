import React, { useEffect, useState } from 'react';
// Helper functions
import {
  fetchClarifaiFaceDetection,
  calculateFaceLocation,
} from './main.helper';
// Components
import Form from '../../components/Form';
import DetectionImage from '../../components/DetectionImage';
// Style
import '../../App.css';
import { Loader } from '../../components/Loader';
import { Dna } from 'react-loader-spinner';

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
    setBox([]);
    setImageUrl(event.target[0].value);
    setStatus('loading');
    const data = await fetchClarifaiFaceDetection(imageUrl);
    if (data === 'Fetch failed') {
      setStatus('rejected');
      return setError(data);
    }
    setError('');
    return calculateFaceLocation(data, setBox, setStatus);
  };

  if (status === 'idle' && user) {
    return <Form handleSubmit={handleSubmit} />;
  }

  if (status === 'loading') {
    return (
      <>
        <Form handleSubmit={handleSubmit} />
        <Loader />
        <DetectionImage hidden={true} imageUrl={imageUrl} box={box} />
      </>
    );
  }

  if (status === 'resolved') {
    return (
      <>
        <Form handleSubmit={handleSubmit} />
        <DetectionImage hidden={false} imageUrl={imageUrl} box={box} />
      </>
    );
  }

  if (status === 'rejected') {
    return (
      <>
        <Form handleSubmit={handleSubmit} />
        <div className="text-2xl font-bold text-center text-white">
          {error}, try again!
        </div>
      </>
    );
  }
  return (
    <>
      <div className="text-2xl font-bold text-center text-white">
        LOG IN FIRST!
      </div>
    </>
  );
}

export default Main;
