import axios from 'axios';

export const getRequest = function (pageReq) {
  const page = /^[0-9]\d*$/.test(pageReq) ? pageReq : 1;
  return axios
    .get(`http://127.0.0.1:3000/api/request?page=${page}`)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return {
        currentPage: 1,
        lastPage: 1,
        pageSize: 10,
        previousPage: 1,
        nextPage: 1,
        toPaginate: false,
        numResults: 0,
        results: [],
      };
    });
};

export const createRequest = function ({ userId, text }) {
  const data = {};
  if (/^[0-9]\d*$/.test(userId)) {
    data.userId = userId;
  }
  if (typeof text === 'string') {
    data.text = text;
  }
  
  return axios
    .post('/api/request', data)
    .then((res) => res.data)
    .catch((err) => {
      return { ok: false, message: 'Ошибка заявка пользователя не создана' };
    });
};
