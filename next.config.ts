import type { NextConfig } from "next";
import { MainUrl } from "./src/lib/helper";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.byteimg.com',
      },
      {
        protocol: 'https',
        hostname: `image.${MainUrl}`,
      },
    ],
  },
};

export default nextConfig;
