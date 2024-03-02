import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "upcdn.io"
      },
      {
        hostname: "replicate.delivery"
      },
    ]
  },
};

export default nextConfig;
