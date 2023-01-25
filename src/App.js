import Navbar from './components/Navbar';
import Form from './components/Form';
import { Particle } from './components/Particle';
import DetectionImage from './components/DetectionImage';
import React, { useState } from 'react';
import './App.css';

// FACE DETECTION API

function App() {
  const [inputValue, setInputValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [box, setBox] = useState([]);

  const calculateFaceLocation = data => {
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
  };

  const raw = JSON.stringify({
    user_app_id: {
      user_id: 'clarifai',
      app_id: 'main',
    },
    inputs: [
      {
        data: {
          image: {
            url: inputValue,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'Key 6d212f09453d4109a531648904f6ca06',
    },
    body: raw,
  };

  const handleSubmit = event => {
    event.preventDefault();
    setBox([]);
    setImageUrl(inputValue);
    fetch(
      `https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => calculateFaceLocation(result))
      .catch(error => console.log('error', error));
  };

  const handleInput = event => {
    setInputValue(event.target.value);
  };

  // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
  // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
  // this will default to the latest version_id

  return (
    <>
      <Navbar />

      <Form
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        inputValue={inputValue}
      />

      <DetectionImage imageUrl={imageUrl} box={box} />
    </>
  );
}

export default App;
