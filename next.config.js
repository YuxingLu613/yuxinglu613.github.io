/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: 'https://yuxinglu613.github.io',
  trailingSlash: true,
}

module.exports = nextConfig 