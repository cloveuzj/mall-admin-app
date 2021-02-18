import axios from './axios';

export default {
  select(params) {
    return axios.get('/category/all', { params });
  },
};
