export async function RegisterCall(credentials) {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  };
  try {
    const response = await fetch('http://localhost:3000/register', fetchOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
