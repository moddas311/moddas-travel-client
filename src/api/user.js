export const hostRequest = async (hostData) => {
  const url = `${process.env.REACT_APP_API_URL}/user/${hostData?.email}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(hostData),
  });

  const data = await response.json();

  return data;
};

// Get user role

export const getUserRole = async (email) => {
  const url = `${process.env.REACT_APP_API_URL}/user/${email}`;

  const response = await fetch(url);

  const user = await response.json();

  return user?.role;
};
