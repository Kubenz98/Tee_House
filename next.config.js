/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sea-turtle-app-xoj6s.ondigitalocean.app',
      },
    ],
  },
}

module.exports = nextConfig
