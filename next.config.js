const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
let config = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.unsplash.com'
    },],
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' })

module.exports = withBundleAnalyzer(withMDX(config));
