const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    externalDir: true, // allow imports outside frontend/
  },
  webpack: (config) => {
    config.resolve.alias["@backend"] = path.resolve(__dirname, "../backend/src");
    return config;
  },
};

module.exports = nextConfig;
