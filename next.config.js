/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'], // Add any external image domains you'll use
  },
  // Enable experimental features if needed
  experimental: {
    // Add experimental features here if needed
  },
}

module.exports = nextConfig 