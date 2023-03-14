/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: ".next",
  webpack: (config, { isServer }) => {
    const prod = process.env.NODE_ENV === "production";
    return {
      ...config,
      mode: prod ? "production" : "development",
      devtool: prod ? "source-map" : "eval-cheap-module-source-map",
    };
  },
};

module.exports = nextConfig;
