import axios from 'axios';

export const getUser = function (pageReq, username) {
  const page = /^[0-9]\d*$/.test(pageReq) ? pageReq : 1;

  const data = {
    page,
  };
  
  if (username && typeof username === 'string') {
    data.username = username;
  }
  const searchParams = new URLSearchParams(data);
  return axios
    .get(`${process.env.URL_HOST}/api/users?${searchParams.toString()}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
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
    .get(`${process.env.URL_HOST}/api/user/${username}`)
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
