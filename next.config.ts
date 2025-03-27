/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337', // Change this if Strapi is running on a different port
        pathname: '/uploads/**',
      },
    ],
  },
};
