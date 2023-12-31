import apiUrl from '@/api';
import axios from 'axios';

export const getUser = function (pageReq, username) {
  const page = /^[0-9]\d*$/.test(pageReq) ? pageReq : 1;

  let data = {
    page,
  };

  if (username && typeof username === 'string') {
    data = { ...data, username };
  }

  return axios
    .get(`${apiUrl}/api/users`, {
      params: data,
    })
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

export const getUserByName = function (username) {
  return axios
    .get(`${apiUrl}/api/user/${username}`)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return {
        ok: false,
        user: null,
      };
    });
};
