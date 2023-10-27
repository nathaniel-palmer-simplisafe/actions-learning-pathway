/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/actions-learning-pathway",

  images: {
    unoptimized: true,
  },
  
  reactStrictMode: true,
}

module.exports = nextConfig
