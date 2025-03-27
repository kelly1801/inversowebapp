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
  env: {
    STRAPI_URL: process.env.STRAPI_URL || "http://localhost:1337", // Fallback if env is missing
  },
};
