import axios from 'axios';
axios.defaults.baseURL = 'https://6443ddab466f7c2b4b5c0c75.mockapi.io';

export const getUsers = async () => {
  const response = await axios.get(`users`);
  return response.data;
};

export const updateUser = async (id, followers, check) => {
  await axios.put(`users/${id}`, { followers, check });
};
