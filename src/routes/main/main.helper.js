//Function that fetch from backend API call to clarifai face-detection model
export async function fetchClarifaiFaceDetection(imageUrl) {
  const postOptions = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imageUrl }),
  };
  try {
    const response = await fetch('https://face-app-api.onrender.com/imageurl', postOptions);
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}

// Function that calculate face location
export function calculateFaceLocation(data, setBox, setStatus) {
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);

  const clarifaiFaces = data.outputs[0].data.regions?.map(region => region);

  clarifaiFaces.forEach(region => {
    const { top_row, right_col, bottom_row, left_col } = region.region_info.bounding_box;

    setBox(prevState => [
      ...prevState,
      {
        leftCol: left_col * width,
        topRow: top_row * height,
        rightCol: width - right_col * width,
        bottomRow: height - bottom_row * height,
      },
    ]);
    setStatus('resolved');
  });
}
