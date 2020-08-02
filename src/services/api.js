import axios from "axios";

const API_URL = `https://jsonplaceholder.typicode.com`;

export const getTodos = () => {
  return axios.get(`${API_URL}/users/3/todos`);
};
