import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});
instance.interceptors.request.use((request) => {
  console.log(request);
  return request;
});
// instance.interceptors.response.use((response) => {
//   console.log(response);
// });

export default instance;
