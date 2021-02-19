import axios from './axios';

export default {
  product(params) {
    return axios.get('/products/all', { params });
  },
  remove(id, params) {
    return axios.delete(`products/${id}`, { params });
  },
  add(params) {
    return axios.post('/products/add', params);
  },
  detail(id, params) {
    return axios.get(`/products/${id}`, { params });
  },
  edit(params) {
    return axios.put('/products/edit', params);
  },
};
