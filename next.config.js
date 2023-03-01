/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'monkfish-app-sa5vq.ondigitalocean.app',
        port: '',
        pathname: '/uploads/**'
      },
    ],
  },
}

module.exports = nextConfig
