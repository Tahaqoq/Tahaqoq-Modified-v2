/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "lorempixel.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
