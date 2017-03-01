import axios from 'axios';

const HOST = '/api/';

export default function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(HOST + url, { params })
      .then((res) => {
        resolve(res.data);
      }).catch(err => reject(err));
  });
}
