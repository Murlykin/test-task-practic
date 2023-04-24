import axios from 'axios';
axios.defaults.baseURL = 'https://6443ddab466f7c2b4b5c0c75.mockapi.io';

export const getUsers = async (page = 1) => {
  const { data } = await axios.get(`users`, {
    params: {
      page,
      limit: 3,
    },
  });
  return data;
};

export const updateUser = async (id, followers, check) => {
  await axios.put(`users/${id}`, { followers, check });
};
