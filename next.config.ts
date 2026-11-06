import type { NextConfig } from "next";

// The Express API (../notequest-backend). Browser requests to /api/* and
// /uploads/* are proxied there so cookies stay first-party.
const API_URL = process.env.API_URL || "http://localhost:5050";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      { source: "/api/:path*", destination: `${API_URL}/api/:path*` },
      { source: "/uploads/:path*", destination: `${API_URL}/uploads/:path*` },
    ];
  },
};

export default nextConfig;
