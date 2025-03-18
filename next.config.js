/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/personal-cv', // Replace with your repo name
  assetPrefix: '/personal-cv/', // Replace with your repo name
}

module.exports = nextConfig 