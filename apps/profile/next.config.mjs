/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alysonfs.github.io",
        port: "",
        pathname: "/",
      }
    ]
  },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
