/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@heroicons/react'],
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  // experimental: {
  //   appDir: true,
  //   serverActions: true,
  // },
  // // fix dompurify build https://github.com/vercel/next.js/issues/46893
  webpack: (config) => {
    config.externals = [...config.externals, 'canvas', 'jsdom']
    return config
  },
}

module.exports = nextConfig
