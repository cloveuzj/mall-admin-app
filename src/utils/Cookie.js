import Cookies from 'js-cookie';

export function setUser(info) {
  const arr = Object.entries(info);
  for (let i = 0; i < arr.length; i += 1) {
    Cookies.set(arr[i][0], arr[i][1]);
  }
}

export function getUser() {
  return {
    username: Cookies.get('username'),
    email: Cookies.get('email'),
    appkey: Cookies.get('appkey'),
    role: Cookies.get('role'),
  };
}

export function removeUser() {
  Cookies.remove('username');
  Cookies.remove('email');
  Cookies.remove('appkey');
  Cookies.remove('role');
}
