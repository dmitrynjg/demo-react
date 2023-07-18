/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${
          process.env.NODE_ENV !== 'production' ? 'http://localhost:8000' : 'https://api-katy12.herokuapp.com'
        }/api/:path*`, // Proxy to Backend
      },
    ];
  },
};
