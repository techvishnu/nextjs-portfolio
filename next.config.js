/** @type {import('next').NextConfig} */
const { withAxiom } = require('next-axiom');
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
};

module.exports = withAxiom(nextConfig);
