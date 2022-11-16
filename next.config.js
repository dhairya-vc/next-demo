/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "openweathermap.org",
      },
    ],
  },
  // experimental: { appDir: true },
};

module.exports = nextConfig;
