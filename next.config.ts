import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Mengabaikan error ESLint selama proses build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
