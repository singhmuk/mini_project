import axios from 'axios';

export const fetchTasks = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10'); 
};
