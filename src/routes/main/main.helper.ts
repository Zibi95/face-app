//Type
import { Output } from './apiType';
import { Box } from './Main';
import { UserData } from '../../App';

export type Clarifai = {
  outputs: Output[];
};

//Function that fetch from backend API call to clarifai face-detection model
export async function fetchClarifaiFaceDetection(imageUrl: string): Promise<Clarifai | string> {
  const postOptions = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imageUrl }),
  };
  try {
    if (!imageUrl) return 'I need an image url';
    const response = await fetch('http://localhost:3000/imageurl', postOptions);
    return await response.json();
  } catch (err: any) {
    return err;
  }
}

// Function that calculate face location
export function calculateFaceLocation(
  data: Clarifai,
  setBox: React.Dispatch<React.SetStateAction<Box[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  const image: HTMLImageElement = document.getElementById('inputImage') as HTMLImageElement;
  const width: number = Number(image.width);
  const height: number = Number(image.height);

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
    setLoading(false);
  });
}

export async function incrementEntries(user: UserData) {
  const { id } = user;
  const putOptions = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  };
  try {
    if (id) {
      const response = await fetch('http://localhost:3000/image', putOptions);
      return await response.json();
    }
  } catch (err: any) {
    return err;
  }
}
