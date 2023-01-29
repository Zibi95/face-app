import React, { useState } from 'react';
import Form from '../../components/Form';
import DetectionImage from '../../components/DetectionImage';
import '../../App.css';

function Main({ user }) {
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

  // FACE DETECTION API

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

  // **********************************************

  const handleInput = event => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        inputValue={inputValue}
      />

      <DetectionImage imageUrl={imageUrl} box={box} />
    </>
  );
}

export default Main;
