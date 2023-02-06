import React, { useEffect, useState } from 'react';
import Form from '../../components/Form';
import DetectionImage from '../../components/DetectionImage';
import '../../App.css';

function calculateFaceLocation(data, setBox) {
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);

  const clarifaiFaces = data.outputs[0].data.regions.map(region => region);

  clarifaiFaces.forEach(region => {
    const { top_row, right_col, bottom_row, left_col } =
      region.region_info.bounding_box;

    setBox(prevState => [
      ...prevState,
      {
        leftCol: left_col * width,
        topRow: top_row * height,
        rightCol: width - right_col * width,
        bottomRow: height - bottom_row * height,
      },
    ]);
  });
}

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

  const handleSubmit = event => {
    event.preventDefault();

    setImageUrl(event.target[0].value);

    fetch('http://localhost:3000/imageurl', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageUrl }),
    })
      .then(response => response.json())
      .then(result => calculateFaceLocation(result, setBox))
      .catch(error => console.log('error', error));
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
