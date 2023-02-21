export async function Authentication(url, credentials) {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  };
  try {
    const response = await fetch(url, fetchOptions);
    const user = await response.json();
    return user;
  } catch (error) {
    throw error;
  }
}
