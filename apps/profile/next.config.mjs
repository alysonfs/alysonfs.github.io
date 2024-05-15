/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
