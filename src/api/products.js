import axios from './axios';

export default {
  product(params) {
    return axios.get('/products/all', { params });
  },
  remove(id, params) {
    return axios.delete(`products/${id}`, { params });
  },
};
