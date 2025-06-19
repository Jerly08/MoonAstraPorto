/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Explicitly ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript errors during builds as well
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig; 