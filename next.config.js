const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: ".next",
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "src/styles/_variables.scss"; @import "src/styles/_mixins.scss";`,
  },
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
