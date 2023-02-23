type Credentials = {
  name?: string;
  password: string;
  email: string;
};

export async function Authentication(url: string, credentials: Credentials) {
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
