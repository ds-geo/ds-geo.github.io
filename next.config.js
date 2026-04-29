/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/ds-geo.github.io" : "",
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;