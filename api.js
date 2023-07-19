const apiUrl =
  process.env.NODE_ENV === 'production' ? 'https://demo-php.weed-finder.store' : `http://localhost:${process.env.PORT}`;

  export default apiUrl;