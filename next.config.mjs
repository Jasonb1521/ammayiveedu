/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Temporarily ignore build errors during deployment
    ignoreBuildErrors: true,
  },
  eslint: {
    // Temporarily ignore linting errors during deployment
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
