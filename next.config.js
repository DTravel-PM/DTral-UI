/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    URL_API: process.env.URL_API,
  },
  domains: ['https://bootdey.com/img/Content/avatar'],
};
