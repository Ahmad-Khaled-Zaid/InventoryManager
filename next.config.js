/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true, minimumCacheTTL: 60,

  }
}
module.exports = nextConfig
