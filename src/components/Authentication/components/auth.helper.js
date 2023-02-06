export async function RegisterCall(credentials) {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  };
  try {
    const response = await fetch('https://face-app-api.onrender.com/register', fetchOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function SigninCall(credentials) {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  };

  try {
    const response = await fetch('https://face-app-api.onrender.com/signin', fetchOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
