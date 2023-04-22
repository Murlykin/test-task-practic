import axios from 'axios';
axios.defaults.baseURL = 'https://6443ddab466f7c2b4b5c0c75.mockapi.io';

export const getUsers = async () => {
  const response = await axios.get(`users`);
  console.log(response.data);
  return response.data;
};

// export const addContact = async ({ name, number }) => {
//   const response = await axios.post('/users', { name, number });
//   return response.data;
// };

// export const deleteContact = async id => {
//   const response = await axios.delete(`/users/${id}`);
//   return response.data;
// };
