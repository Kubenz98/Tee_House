/** @type {import('next').NextConfig} */

const { PROTOCOL, HOSTNAME, PORT, PATHNAME } = process.env;

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: PROTOCOL,
        hostname: HOSTNAME,
        port: PORT,
        pathname: PATHNAME,
      },
    ],
  },
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
};

module.exports = nextConfig;
