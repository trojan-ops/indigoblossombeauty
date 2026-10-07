import type { NextConfig } from "next";

/** @type {import('next').Next.config} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;

//const nextConfig: NextConfig = {
//  /* config options here */
//};

export default nextConfig;
