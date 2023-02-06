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

function Main({ user }) {
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState([]);

  const initialState = () => {
    setImageUrl('');
    setBox([]);
  };

  useEffect(() => {
    initialState();
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    setBox([]);
    setImageUrl(event.target[0].value);

    const data = await fetchClarifaiFaceDetection(imageUrl);
    if (data !== 'Fetch failed') calculateFaceLocation(data, setBox);
  };

  const loggedIn = (
    <>
      <Form handleSubmit={handleSubmit} />
      <DetectionImage imageUrl={imageUrl} box={box} />
    </>
  );

  return <>{user && loggedIn}</>;
}

export default Main;
