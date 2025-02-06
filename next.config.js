/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com', "firebasestorage.googleapis.com"], // Add this domain
  },
}

module.exports = nextConfig;
